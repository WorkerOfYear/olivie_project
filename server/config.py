import os
from dotenv import load_dotenv


load_dotenv()


class DevelopmentConfig(object):
    SECRET_KEY = os.getenv('SECRET_KEY') or 'development-secret'

    SQLALCHEMY_TRACK_MODIFICATIONS = False    
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_ECHO = True

    DEBUG = True

    # APPLICATION_ROOT = os.getenv("APPLICATION_ROOT") or os.getcwd()
    MAPBOX_TOKEN = os.getenv('MAPBOX_TOKEN')

# class ProductionConfig(Config):
#     DATABASE_URI = 'mysql://user@localhost/foo'

# class TestingConfig(Config):
#     DATABASE_URI = 'sqlite:///:memory:'
#     TESTING = True