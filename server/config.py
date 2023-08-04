import os
from dotenv import load_dotenv


load_dotenv()


class DevelopmentConfig(object):
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
    SECRET_KEY = os.getenv('SECRET_KEY') or 'development-secret'
    DEBUG = True
    # APPLICATION_ROOT = os.getenv("APPLICATION_ROOT") or os.getcwd()

# class ProductionConfig(Config):
#     DATABASE_URI = 'mysql://user@localhost/foo'

# class TestingConfig(Config):
#     DATABASE_URI = 'sqlite:///:memory:'
#     TESTING = True