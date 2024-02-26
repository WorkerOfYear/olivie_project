from flask import Flask
from redis import Redis

import redis
import os


app = Flask(__name__)
app.config["SESSION_TYPE"] = "redis"
app.config["SESSION_REDIS"] = Redis.from_url("redis://127.0.0.1:6379")
app.config.from_object("config.DevelopmentConfig")

from app.db_modules import db
from app.extensions import bcrypt, cors, session, migrate, ma

db.init_app(app)
ma.init_app(app)
bcrypt.init_app(app)
session.init_app(app)
cors.init_app(app, supports_credentials=True)

migrate.init_app(app, db)

from app.auth import auth_bp
from app.artist import artist_bp
from app.home import homepage_bp
from app.geocoding import geocoding_bp
from app.artist_crud import artist_crud_bp

app.register_blueprint(auth_bp)
app.register_blueprint(artist_crud_bp)
app.register_blueprint(artist_bp)
app.register_blueprint(homepage_bp)
app.register_blueprint(geocoding_bp)


# if you want create local db from scratch
# with app.app_context():
#     db.create_all()
