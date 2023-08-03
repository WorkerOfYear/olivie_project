from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, or_
from elasticsearch import Elasticsearch
from loguru import logger
from dotenv import load_dotenv
import os

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

def insert_artist(engine, es):
    # push to DB + indexing
    with Session(engine) as session:
        artists_data = session.query(tables['artists']).all()
        for artist in artists_data:
            artist_id, artist_name, main_artistic_field, other_artistic_field_1, other_artistic_field_2, location= artist
            document = {
                "artist_id": artist_id,
                "artist_name": artist_name,
                "main_artistic_field": main_artistic_field,
                "other_artistic_field_1": other_artistic_field_1,
                "other_artistic_field_2": other_artistic_field_2,
                "location": location
            }
            try:
                session.execute(tables['artists'].insert().values(artist_name=artist_name))
                session.commit()
                res = es.index(index="artists_index", id=artist_id, body=document)
                if res["result"] == "created":
                    logger.info(f"Document with ID {artist_id} successfully indexed in Elasticsearch.")
                else:
                    logger.info(f"Document with ID {artist_id} already exists in Elasticsearch.")
                return '201'
            except Exception as e:
                logger.exception(f"Error indexing document with ID {artist_id}. Details: {str(e)}")
                session.rollback()
                return '500'

def get_artist(engine, search_term):
    # get artist with filter on indexed field
    with Session(engine) as session:
        artists = tables['artists']
        result = session.query(artists).filter(
            or_(
                artists.c.main_artistic_field.ilike(f"%{search_term}%"),
                artists.c.other_artistic_field_1.ilike(f"%{search_term}%"),
                artists.c.other_artistic_field_2.ilike(f"%{search_term}%")
            )
        ).all()
        return result