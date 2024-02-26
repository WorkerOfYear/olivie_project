from flask import jsonify

from app.db_modules.artist import Artist
from app import db
from . import homepage_bp

@homepage_bp.route("/")
@homepage_bp.route("/homepage")
def homepage():
    artists = db.session.query(Artist).all()
    return jsonify(artists)
