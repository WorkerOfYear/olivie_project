from flask import Flask, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from loguru import logger



db = SQLAlchemy()
app = Flask(__name__)

app.config.from_object('config.DevelopmentConfig')
db.init_app(app)


with app.app_context():
    eng = db.get_engine()
    Base = automap_base()
    Base.prepare(eng, reflect=True) 
    # tables = Base.metadata.tables
    Artist = Base.classes['artist']
    logger.debug(Artist)


@app.route("/")
def homepage():
    # logger.debug(dir(Artist))
    # return ''
    # logger.debug(Artist.query.all())
    # result = db.get_or_404(Artist, 2)
    # logger.debug(result)
    rest = db.session.query(Artist.query.all())
    # logger.debug(type(result))
    # columns = Artist.columns.keys()
    # d = [{c: v for c, v in zip(columns, row)} for row in result]
    return rest