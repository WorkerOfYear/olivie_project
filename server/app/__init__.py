from flask import Flask, url_for, send_from_directory, jsonify, make_response, send_file, render_template
from sqlalchemy.ext.automap import automap_base
from loguru import logger

import os


app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')


from app.auth import auth_bp
from app.artist import artist_bp
from app.home import homepage_bp

app.register_blueprint(auth_bp)
app.register_blueprint(artist_bp)
app.register_blueprint(homepage_bp)
