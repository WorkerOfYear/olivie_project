from flask import jsonify

from app.db_modules.artist import Artist
from app.db_modules.activity import Activity
from app.db_modules.artist_activity import ArtistActivity
from app.db_modules import db

from . import artist_bp


#@artist_bp.route("/all")
#def artist_all():
#    result = db.session.query(Artist).all()
#    return jsonify(result)


#@artist_bp.route("/<int:id>")
#def artist(id):
#    result = db.session.query(Artist).filter(Artist.id == id).first()
#    return jsonify(result)


@artist_bp.route("/all")
def artist_all():
    artists = db.session.query(Artist).all()
    # Сериализация артистов и их активностей
    results = []
    for artist in artists:
        artist_dict = artist.__dict__.copy()
        del artist_dict["_sa_instance_state"]
        artist_dict["activities"] = [activity.name for activity in artist.activities]
        results.append(artist_dict)
    return jsonify(results)


@artist_bp.route("/<int:id>")
def artist(id):
    artist = db.session.query(Artist).filter(Artist.id == id).first()  

    if artist is None:
        return jsonify({"error": "Artist not found"}), 404
        
    artist_dict = artist.__dict__.copy()
    del artist_dict["_sa_instance_state"]
    # Сериализация связанных активностей
    artist_dict["activities"] = [activity.name for activity in artist.activities]
    return jsonify(artist_dict)
