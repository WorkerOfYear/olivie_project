from flask import Blueprint

from .controller import api as artist_crud_ns


artist_crud_bp = Blueprint("artist_crud_bp", __name__, url_prefix="/artist-crud")
