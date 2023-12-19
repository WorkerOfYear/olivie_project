from flask import Blueprint


geocoding_bp = Blueprint('geocoding_bp', __name__, url_prefix='/geoapi')


from .routes import *
