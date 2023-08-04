from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, or_
from elasticsearch import Elasticsearch
from loguru import logger
from dotenv import load_dotenv
import os

load_dotenv()

def create_db_resources_v3():
    creds = {
       "hostname": os.getenv("DB_HOSTNAME"),
       "port": os.getenv("DB_PORT"),
       "username": os.getenv("DB_USERNAME"),
       "password": os.getenv("DB_PASSWORD"),
       "dbname": os.getenv("DB_NAME")
   }
    logger.info(f'Creating resources for database "{creds["dbname"]}"')
    conn_str = "postgresql://{username}:{password}@{hostname}:{port}/{dbname}".format(**creds)
    engine = create_engine(conn_str, echo=False)
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    tables = Base.metadata.tables
    return engine, tables


def insert_artist(engine, es, user_id, artist_name, email, phone_number, professional_webpage, instagram_url, facebook_url, vk_url, promo_video_url, address, location):
    # push to DB + indexing
    with Session(engine) as session:
        artist_table = tables['artist']
        document = {
            "artist_id": None,
            "artist_name": artist_name,
            "email": email,
            "phone_number": phone_number,
            "professional_webpage": professional_webpage,
            "instagram_url": instagram_url,
            "facebook_url": facebook_url,
            "vk_url": vk_url,
            "promo_video_url": promo_video_url,
            "address": address,
            "location": location
        }
        try:
            artist_insert = artist_table.insert().values(
                user_id=user_id,
                artist_name=artist_name,
                email=email,
                phone_number=phone_number,
                professional_webpage=professional_webpage,
                instagram_url=instagram_url,
                facebook_url=facebook_url,
                vk_url=vk_url,
                promo_video_url=promo_video_url,
                address=address,
                location=location
            )
            result = session.execute(artist_insert)
            artist_id = result.inserted_primary_key[0]
            session.commit()

            document["artist_id"] = artist_id
            res = es.index(index="artists_index", id=artist_id, body=document)
            if res["result"] == "created":
                logger.info(f"Document with ID {artist_id} successfully indexed in Elasticsearch.")
            else:
                logger.info(f"Document with ID {artist_id} already exists in Elasticsearch.")
            return '201'
        except Exception as e:
            logger.exception(f"Error inserting document with ID {artist_id}. Details: {str(e)}")
            session.rollback()
            return '500'


def get_artist(engine, search_term):
    # get artist with filter on indexed field
    with Session(engine) as session:
        artist_table = tables['artist']  # Получаем объект таблицы для артистов
        result = session.query(artist_table).filter(
            or_(
                artist_table.c.artist_name.ilike(f"%{search_term}%"),
                artist_table.c.email.ilike(f"%{search_term}%"),
                artist_table.c.phone_number.ilike(f"%{search_term}%"),
                artist_table.c.professional_webpage.ilike(f"%{search_term}%"),
                artist_table.c.instagram_url.ilike(f"%{search_term}%"),
                artist_table.c.facebook_url.ilike(f"%{search_term}%"),
                artist_table.c.vk_url.ilike(f"%{search_term}%"),
                artist_table.c.promo_video_url.ilike(f"%{search_term}%"),
                artist_table.c.address.ilike(f"%{search_term}%"),
                artist_table.c.location.ilike(f"%{search_term}%")
            )
        ).all()
        return result


# Создание ресурсов БД
engine, tables = create_db_resources_v3()

# Создание ресурсов Elasticsearch
es = Elasticsearch(['http://localhost:9200'])
