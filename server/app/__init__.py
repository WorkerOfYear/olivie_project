from flask import Flask, url_for, send_from_directory, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from loguru import logger

from app.db.artist import Artist


db = SQLAlchemy()
app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')
db = SQLAlchemy(app)


@app.route("/artist/<int:id>")
def artist(id):
    res = db.session.query(Artist).filter(Artist.id==id).first()
    return jsonify(res)


@app.route("/artist/all")
def artist_all():
    res = db.session.query(Artist).all()
    return jsonify(users)