from flask import Flask, url_for, send_from_directory, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from loguru import logger
from sqlalchemy_serializer import SerializerMixin


db = SQLAlchemy()
app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')
db = SQLAlchemy(app)


with app.app_context():
    Base = automap_base()
    Base.prepare(db.engine, reflect=True)
    

# Что использовать, классы, таблицы или модели, в чем разница?
# Кажется, что у таблиц шире функционал
# С классами можно использовать методы типа first_or_404
Artist = Base.metadata.tables['artist']


@app.route("/artist/<int:id>")
def artist(id):
    result = db.session.query(Artist).filter(Artist.c.id == id).first()
    columns = Artist.columns.keys()
    # d = [{c: v for c, v in zip(columns, row)} for row in result]
    d = {c: v for c, v in zip(columns, result)}
    return jsonify(d)


@app.route("/artist/all")
def artist_all():
    result = db.session.query(Artist).all()
    columns = Artist.columns.keys()
    # написать нормальный сериализатор, а не выходить из ситуации подобным колхозом
    d = [{c: v for c, v in zip(columns, row)} for row in result]
    return jsonify(d)