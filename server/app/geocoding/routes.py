from flask import request, jsonify
from flask import current_app
from flask_restful.reqparse import RequestParser
from flask_restful import Api, Resource, abort
from sqlalchemy import func
import requests
from loguru import logger
from difflib import get_close_matches

from app.db_modules.artist import Artist
from app.db_modules import db

from . import geocoding_bp


api = Api(geocoding_bp)


ps = RequestParser()
ps.add_argument(
    'address', required=True, nullable=False, store_missing=False)
ps.add_argument(
    'radius', required=True, nullable=False, store_missing=False, type=int)
ps.add_argument(
    'activity', required=False, nullable=True, store_missing=True, action='append')


class GeoResource(Resource):
    def post(self):
        args = ps.parse_args()
        if args['radius'] <= 0:
            abort(400, message='Radius must be greater than 0 km')
        # logger.debug(args['activity'])
        mapbox_access_token = 'some-token'
        geocoding_url = f'https://api.mapbox.com/geocoding/v5/mapbox.places/{args["address"]}.json'
        params = {
            'access_token': current_app.config["MAPBOX_TOKEN"]
        }
        response = requests.get(geocoding_url, params=params)
        if response.ok:
            data = response.json()
            longitude, latitude = data['features'][0]['center']
            point_of_interest = func.ST_MakePoint(longitude, latitude)
            artists_within_radius = db.session.query(Artist).filter(
                func.ST_DWithin(
                    Artist.location,
                    point_of_interest,
                    args['radius'] * 1000
                )
            ).all()
            results = []
            for artist in artists_within_radius:
                artist_dict = artist.__dict__.copy()
                del artist_dict["_sa_instance_state"]
                artist_dict["location"] = db.session.scalar(func.ST_AsText(artist.location))
                artist_dict["activities"] = [activity.name for activity in artist.activities]
                artist_dict["reviews"] = [
                    {
                        "comment": review.comment,
                        "grade": review.grade,
                        "user_id": review.user_id
                    }
                    for review in artist.reviews
                ]
                results.append(artist_dict)
            return jsonify(results)
        else:
            return jsonify({'error': 'Unable to geocode address'}), 404

api.add_resource(GeoResource, '/find_artists', methods=['POST'])
