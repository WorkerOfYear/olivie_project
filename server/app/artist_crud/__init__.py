from flask import Blueprint


artist_crud_bp = Blueprint('artist_crud_bp', __name__, url_prefix='/api')


from .routes import *
