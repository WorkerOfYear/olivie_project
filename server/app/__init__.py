from flask import Flask, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from loguru import logger


db = SQLAlchemy()
app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')
db = SQLAlchemy(app)


with app.app_context():
    Base = automap_base()
    Base.prepare(db.engine, reflect=True)
    Artist = Base.classes['artist']


@app.route("/")
def homepage():
    logger.debug(type(Artist))
    u = db.session.query(Artist).all()
    for r in u:
        logger.debug(r.artist_name)
    return {'mthd': 'SMTH'}