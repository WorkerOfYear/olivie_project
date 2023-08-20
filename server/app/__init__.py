from flask import Flask, url_for, send_from_directory, jsonify, make_response, send_file, render_template
from flask import session
from flask_session import Session
from sqlalchemy.ext.automap import automap_base
from loguru import logger

import redis
import os


app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')

app.config['SESSION_TYPE'] = 'redis'
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_REDIS'] = redis.from_url('redis://localhost:6379')

from app.auth import auth_bp
from app.artist import artist_bp
from app.home import homepage_bp
from app.extensions.crypt import bcrypt

app.register_blueprint(auth_bp)
app.register_blueprint(artist_bp)
app.register_blueprint(homepage_bp)

Session(app)
bcrypt.init_app(app)
