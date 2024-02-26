from flask import jsonify
from loguru import logger
from dataclasses_serialization.json import JSONSerializer
from sqlalchemy.sql import select

from app.db_modules.artist import Artist
from app.db_modules.activity import Activity
from app.db_modules.artist_activity import ArtistActivity
from app.db_modules.user import User
from app.db_modules.activity import Activity
from app.db_modules.artist_activity import ArtistActivity
from app.db_modules.review import Review
from app import db

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
    return jsonify(artists)


@artist_bp.route("/<int:id>")
def artist(id):
    artist = db.session.query(Artist).filter(Artist.id == id).first()
    if artist is None:
        return jsonify({"error": "Artist not found"}), 404
    return jsonify(artist)