from flask import Blueprint
from flask_restx import Api
from datetime import timedelta

from .controller import api as artist_ns


artist_crud_bp = Blueprint("artist_crud_bp", __name__, url_prefix="/artist-crud")

artist_crud_api = Api(artist_crud_bp)
artist_crud_api.add_namespace(auth_ns)
