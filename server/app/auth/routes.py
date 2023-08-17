from flask import redirect, url_for, request, session, jsonify, make_response
import bcrypt

from .auth_check import protected
from . import auth_bp

from app.db_modules.user import User
from app.db_modules import db


@auth_bp.route("/", methods=["GET"])
def index():
    return 'Some form to fill'


@auth_bp.route("/signin", methods=["GET"])  # post
def signin():
    # http://127.0.0.1:5000/auth/signin?email=test@test.com&password=1234
    #data = request.json  # Получение данных пользователя из JSON-запроса (test)
    #email = data.get("email") (test)
    #password = data.get("password")
    email = request.args.get("email")
    password = request.args.get("password")    
    if not email or not password:
        return make_response('Authentication failed', 401)
        # flask.flash("Authentication failed")
        # redirect(url_for("auth.index"))
    user = db.session.query(User).filter_by(email=email).first()
    if user and bcrypt.checkpw(password.encode('utf-8'), user.pwd.encode()):
        session.permanent = True
        session["user"] = user.id
        return redirect(url_for("auth.user"))
    else:
        # flask.flash("Authentication failed")
        # redirect(url_for("auth.index"))
        return make_response('Authentication failed', 401)


@auth_bp.route("/user")
@protected
def user():
    user = db.session.query(User).filter_by(id=session["user"]).first()
    return make_response(jsonify(user), 200)


@auth_bp.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("auth.index"))


# # Маршрут по созданию пользователя
# @auth_bp.route("/signup", methods=["GET"])  #post
# def signup():
#     #data = request.json  # Получение данных пользователя из JSON-запроса (test)
    
#     # Получение данных пользователя из GET-запроса
#     name = request.args.get("name")
#     surname = request.args.get("surname")
#     email = request.args.get("email")
#     password_get = request.args.get("pwd")
#     phone_number = request.args.get("phone_number")
#     country = request.args.get("country")
#     language = request.args.get("language")
#     photo_url = request.args.get("photo_url")    
    
#     salt = bcrypt.gensalt()
#     #password = data["pwd"] (test)
#     password = password_get
#     hashed_pwd_prep = bcrypt.hashpw(password.encode('utf-8'), salt)
#     hashed_pwd = hashed_pwd_prep.decode('utf8')
    
#     '''
#    # Создание нового пользователя
#     new_user = User(
#         name=data["name"],
#         surname=data["surname"],
#         email=data["email"],
#         pwd=hashed_pwd,
#         phone_number=data["phone_number"],
#         country=data["country"],
#         language=data["language"],
#         photo_url=data["photo_url"]
#     )
#     '''
    
#     # Создание нового пользователя (test)
#     new_user = User(
#         name=name,
#         surname=surname,
#         email=email,
#         pwd=hashed_pwd,
#         phone_number=phone_number,
#         country=country,
#         language=language,
#         photo_url=photo_url
#     )    
    
#     # Добавление пользователя в сессию и сохранение в БД
#     db.session.add(new_user)
#     db.session.commit()
    
#     return redirect(url_for("auth.index"))
