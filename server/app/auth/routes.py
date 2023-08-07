from flask import Blueprint, redirect, url_for, render_template, request, session
from datetime import timedelta

# Создание blueprint для авторизации
auth_bp = Blueprint('auth', __name__)

# Секретный ключ для сессий
auth_bp.secret_key = "hello"

# Время жизни сессии (пока 10)
auth_bp.permanent_session_lifetime = timedelta(minutes=10)

# Маршрут для входа (страница входа)
@auth_bp.route("/login", methods=["GET"])
def login():
    # Если пользователь уже авторизован, перенаправление на страницу пользователя
    if "user" in session:
        return redirect(url_for("auth.user"))
    return render_template("login.html")    # Иначе отображение страницы входа

# Маршрут для проверки логина и пароля
@auth_bp.route("/check", methods=["GET"])
def check():
    user = request.args.get("username")
    password = request.args.get("password")

    # Код для проверки логина и пароля
    # ...

    if user_is_valid:   # Проверка, действителен ли пользователь с введенными данными
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

# Маршрут для выхода (разлогин)
@auth_bp.route("/logout")
def logout():
    session.pop("user", None)   # Удаление имени пользователя из сессии
    return redirect(url_for("auth.login"))  # Перенаправление на страницу входа
