from flask import jsonify

from app.db_modules.artist import Artist
from app.db_modules import db
from . import artist_bp


@artist_bp.route("/all")
def artist_all():
    result = db.session.query(Artist).all()
    return jsonify(result)


@artist_bp.route("/<int:id>")
def artist(id):
    result = db.session.query(Artist).filter(Artist.id == id).first()
    return jsonify(result)