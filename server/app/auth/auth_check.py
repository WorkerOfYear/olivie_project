from functools import wraps
from flask import Blueprint, redirect, url_for, render_template, request, session


# Декоратор, проверяющий сессию пользователя
def check_session(function=None):
    @wraps(function)
    def wrapper(*args, **kwargs):
        if "user" not in session:
            return redirect(url_for("auth.login"))  # Перенаправление на страницу входа, если пользователь не авторизован
        return function(*args, **kwargs)
    return wrapper


# украл на интернетах еще вариант реализации, на всякий случай

# def login_required(method):
#     @functools.wraps(method)
#     def wrapper(*args, **kwargs):
#         if 'username' in flask.session:
#             return method(*args, **kwargs)
#         else:
#             flask.flash("A login is required to see the page!")
#             return flask.redirect(flask.url_for('index'))
#     return wrapper