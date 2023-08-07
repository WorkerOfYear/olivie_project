from flask import Blueprint


artist_bp = Blueprint('artist_bp', __name__, url_prefix='/artist')


from .routes import *