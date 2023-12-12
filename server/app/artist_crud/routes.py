from flask import jsonify
from flask import request
from flask_restful import Resource, Api

from app.db_modules.artist import Artist
from app.db_modules.activity import Activity
from app.db_modules.review import Review
from app.db_modules.artist_activity import ArtistActivity
from app.db_modules import db
from . import artist_crud_bp

api = Api(artist_crud_bp)

class ArtistResource(Resource):
    def get(self, id):
        artist = db.session.query(Artist).filter(Artist.id == id).first()
        if artist:
            return jsonify(artist)  
        else:
            return {'message': 'Artist not found'}, 404
  
    def post(self):
        data = request.json
        activities_ids = data.pop('activities', []) # extract activities         
        artist_args = {
            key: data.get(key, None) 
            for key in Artist.__annotations__.keys()
        }
        artist_args.pop('id', None)
        new_artist = Artist(**artist_args) 
        db.session.add(new_artist)
        db.session.commit()

        # Check activity_id in activity table
        for activity_id in activities_ids:
            activity = db.session.query(Activity).filter(Activity.id == activity_id).first()
            if not activity:
                db.session.rollback()   # if activity not found
                return {'message': f'Activity with id {activity_id} not found'}, 404        
            new_relation = ArtistActivity(artist_id=new_artist.id, activity_id=activity_id) # if activity found
            db.session.add(new_relation)
        db.session.commit()      
         
        return '', 201

    def put(self, id):
        data = request.json 
        activities_ids = data.pop('activities', []) # extract activities           
        artist = db.session.query(Artist).filter(Artist.id == id).first()
        if artist:
            for key, value in data.items():
                if hasattr(artist, key):
                    setattr(artist, key, value)
            
            # Update activities relations
            db.session.query(ArtistActivity).filter(ArtistActivity.artist_id == id).delete()
            for activity_id in activities_ids:
                activity = db.session.query(Activity).filter(Activity.id == activity_id).first()
                if not activity:
                    db.session.rollback()   # if activity not found
                    return {'message': f'Activity with id {activity_id} not found'}, 404           
                new_relation = ArtistActivity(artist_id=id, activity_id=activity_id)    # if activity found
                db.session.add(new_relation)            
            
            db.session.commit()
            return '', 204
        else:
            return {'message': 'Artist not found'}, 404
    
    def delete(self, id):
        artist = db.session.query(Artist).filter(Artist.id == id).first()
        if artist:         
            db.session.query(Review).filter(Review.artist_id == id).delete()    # удаляем связанные отзывы
            db.session.query(ArtistActivity).filter(ArtistActivity.artist_id == id).delete()    # удаляем связанные записи в artist_activity
            db.session.delete(artist)   # удаляем артиста
            db.session.commit()
            return '', 204  
        else:
            return {'message': 'Artist not found'}, 404

api.add_resource(ArtistResource, '/artist', '/artist/<int:id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
