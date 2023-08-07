from flask import redirect, url_for, render_template, request, session, jsonify, make_response

from datetime import timedelta
from functools import wraps

from .auth_check import check_session
from . import auth_bp


from app.db_modules.user import User
from app.db_modules import db


@auth_bp.route("/users", methods=["GET"])
def users_test():
    result = db.session.query(User).all()
    return jsonify(result)


@auth_bp.route("/signin", methods=["GET"])
def start():
    return jsonify({})


# Маршрут для входа (страница входа)
@auth_bp.route("/login", methods=["GET"])
def login():
    # Если пользователь уже авторизован, перенаправление на страницу пользователя
    if "user" in session:
        return redirect(url_for("auth.user"))
    return make_response('Not authorized', 401)  # Иначе отображение страницы входа


# Маршрут для проверки логина и пароля
@auth_bp.route("/check", methods=["GET"])
def check():
    user = request.args.get("username")
    password = request.args.get("password")
    if True: # Проверка, действителен ли пользователь с введенными данными
        session.permanent = True
        session["user"] = user
        return redirect(url_for("auth.user"))   # Перенаправление на страницу
    else:
        return redirect(url_for("auth.login"))  # Перенаправление на страницу входа


# Маршрут для страницы пользователя
@auth_bp.route("/user")
def user():
    if "user" in session:
        user = session["user"]  # Получение имени пользователя из сессии
        return f"<h1>{user}</h1>"   # Вывод имени пользователя
    else:
        return redirect(url_for("auth.login"))  # Если пользователь не авторизован


# Маршрут, требующий авторизации
@auth_bp.route("/protected_page")
@check_session
def protected_page():
    user = session["user"]
    return f"<h1>This is a protected page for {user}</h1>"


# Маршрут для выхода (разлогин)
@auth_bp.route("/logout")
def logout():
    session.pop("user", None)   # Удаление имени пользователя из сессии
    return redirect(url_for("auth.login"))  # Перенаправление на страницу входа