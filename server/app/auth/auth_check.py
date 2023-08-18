from functools import wraps
from flask import redirect, make_response, url_for, session, flash


def protected(function=None):
    @wraps(function)
    def wrapper(*args, **kwargs):
        if "user" not in session:
            # flash("You are not signed in!", 'error')
            # return redirect(url_for('auth.index'))
            return make_response('Not authorized', 401)
        return function(*args, **kwargs)
    return wrapper