from flask import Blueprint
from flask_restx import Api
from datetime import timedelta

from .controller import api as auth_ns

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")
auth_bp.secret_key = "hello_is_bad_secret_key"
auth_bp.permanent_session_lifetime = timedelta(minutes=10)

auth_api = Api(auth_bp)
auth_api.add_namespace(auth_ns)
