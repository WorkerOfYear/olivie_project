from flask import Blueprint, redirect, url_for, render_template, request, session
from datetime import timedelta

# Создание blueprint для авторизации
auth_bp = Blueprint('auth', __name__)

# Секретный ключ для сессий
auth_bp.secret_key = "hello"

# Время жизни сессии (пока 10)
auth_bp.permanent_session_lifetime = timedelta(minutes=10)

# Маршрут для входа (страница входа)
@auth_bp.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        session.permanent = True
        user = request.form["nm"]   # Получение имени пользователя из формы
        session["user"] = user  # Запись имени пользователя в сессию
        return redirect(url_for("auth.user"))   # Перенаправление на страницу
    else:
        if "user" in session:
            return redirect(url_for("auth.user"))   # Если пользователь авторизован
        return render_template("login.html")

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
