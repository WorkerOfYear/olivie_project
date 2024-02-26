import os
from dotenv import load_dotenv


load_dotenv()


class DevelopmentConfig(object):
    SECRET_KEY = os.getenv("SECRET_KEY") or "development-secret"

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
    SQLALCHEMY_ECHO = False

    DEBUG = True

    MAPBOX_TOKEN = os.getenv("MAPBOX_TOKEN")

    SESSION_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Strict"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
