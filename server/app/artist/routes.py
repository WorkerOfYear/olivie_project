from flask import Blueprint

# Создаем объект blueprint
artist_bp = Blueprint('artist_bp', __name__)

# Определяем маршруты и функции-обработчики
@artist_bp.route("/artist/all")
def artist_all():
    result = db.session.query(Artist).all()
    columns = Artist.columns.keys()
    # написать нормальный сериализатор, а не выходить из ситуации подобным колхозом
    d = [{c: v for c, v in zip(columns, row)} for row in result]
    return jsonify(d)

@artist_bp.route("/artist/<int:id>")
def artist(id):
    result = db.session.query(Artist).filter(Artist.c.id == id).first()
    columns = Artist.columns.keys()
    # d = [{c: v for c, v in zip(columns, row)} for row in result]
    d = {c: v for c, v in zip(columns, result)}
    return jsonify(d)
