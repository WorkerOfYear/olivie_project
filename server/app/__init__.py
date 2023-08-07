from flask import Flask, url_for, send_from_directory, jsonify, make_response, send_file, render_template
from sqlalchemy.ext.automap import automap_base
from loguru import logger

import os


app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')


from app.auth import auth_bp
from app.artist import artist_bp


app.register_blueprint(auth_bp)
app.register_blueprint(artist_bp)


# @app.route('/')
# def index():
#     project_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
#     client_dir = os.path.join(project_dir, 'client', 'public')
#     index_path = os.path.join(client_dir, 'index.html')
#     return send_file(index_path)
