from flask import redirect, url_for, request, session, jsonify, make_response
from flask.json import jsonify
import logging

from app.db_modules.user import User
from app.db_modules import db
from app.extensions.crypt import bcrypt

from .auth_check import protected
from . import auth_bp


@auth_bp.route("/me", methods=["POST"])
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    logging.warning(user_id)
    user = db.session.query(User).filter(User.id==user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email,
    })

@auth_bp.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
    name = request.json["name"]
    surname = request.json["surname"]
    phone_number = request.json["phone_number"]
    country = request.json["country"]
    language = request.json["language"]
    photo_url = request.json["photo_url"]
    
    user_exists = db.session.query(User).filter(User.email == email).first()

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    new_user = User(
        email=email, 
        pwd=hashed_password,
        name=name,
        surname=surname,
        phone_number=phone_number,
        country=country,
        language=language,
        photo_url=photo_url,
        )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
    })


@auth_bp.route("/signin", methods=["POST"])
def signin():
    email = request.json["email"]
    password = request.json["password"]

    user = db.session.query(User).filter(User.email == email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401
    
    if not bcrypt.check_password_hash(user.pwd, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email,
    })





# @auth_bp.route("/", methods=["GET"])
# def index():
#     return 'Some form to fill'


# @auth_bp.route("/signin", methods=["GET"])  # post
# def signin():
#     # http://127.0.0.1:5000/auth/signin?email=test@test.com&password=1234
#     #data = request.json  # Получение данных пользователя из JSON-запроса (test)
#     #email = data.get("email") (test)
#     #password = data.get("password")
#     email = request.args.get("email")
#     password = request.args.get("password")    
#     if not email or not password:
#         return make_response('Authentication failed', 401)
#         # flask.flash("Authentication failed")
#         # redirect(url_for("auth.index"))
#     user = db.session.query(User).filter_by(email=email).first()
#     if user and bcrypt.checkpw(password.encode('utf-8'), user.pwd.encode()):
#         session.permanent = True
#         session["user"] = user.id
#         return redirect(url_for("auth.user"))
#     else:
#         # flask.flash("Authentication failed")
#         # redirect(url_for("auth.index"))
#         return make_response('Authentication failed', 401)


# @auth_bp.route("/user")
# @protected
# def user():
#     user = db.session.query(User).filter_by(id=session["user"]).first()
#     return make_response(jsonify(user), 200)


# @auth_bp.route("/logout")
# def logout():
#     session.pop("user", None)
#     return redirect(url_for("auth.index"))


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
