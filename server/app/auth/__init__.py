from flask import Blueprint

from datetime import timedelta


auth_bp = Blueprint('auth', __name__, url_prefix='/auth')
auth_bp.secret_key = "hello_is_bad_secret_key"
auth_bp.permanent_session_lifetime = timedelta(minutes=10)


from .routes import *