import json

from flask import request
from flask_restx import Resource, Api, marshal

from app.db_modules.artist import Artist
from app.db_modules.activity import Activity
from app.db_modules.review import Review
from app.db_modules.schemas.artist import ArtistSchema
from app.db_modules.artist_activity import ArtistActivity
from app import db

artist_schema = ArtistSchema()

class ArtistService:
    @staticmethod
    def create(data):
        print(data)
        # activities_ids = data.pop("activities", [])  # extract activities
        # artist_args = {
        #     key: data.get(key, None) for key in Artist.__annotations__.keys()
        # }
        # artist_args.pop("id", None)
        # new_artist = Artist(**artist_args)
        # db.session.add(new_artist)
        # db.session.commit()

        # # Check activity_id in activity table
        # for activity_id in activities_ids:
        #     activity = (
        #         db.session.query(Activity).filter(Activity.id == activity_id).first()
        #     )
        #     if not activity:
        #         db.session.rollback()  # if activity not found
        #         return {"message": f"Activity with id {activity_id} not found"}, 404
        #     new_relation = ArtistActivity(
        #         artist_id=new_artist.id, activity_id=activity_id
        #     )  # if activity found
        #     db.session.add(new_relation)
        # db.session.commit()

        return "", 201
