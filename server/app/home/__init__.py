from flask import Blueprint


homepage_bp = Blueprint('homepage_bp', __name__)


from .routes import *