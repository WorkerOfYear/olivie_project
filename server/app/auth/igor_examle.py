
# Декоратор, проверяющий подпись и срок действия токена
def check_token(function=None):
    @wraps(function)
    def wrapper(*args, **kwargs):
        h = dict(request.headers)
        if 'Token' not in h:
            abort(401, message='Missing token in headers')
        try:
            jwt.decode(h['Token'], Config.SECRET_KEY, algorithms="HS256")
        except Exception as error:
            abort(401, message='Error when decoding token: ' + str(error))
        res = function(*args, **kwargs)
        return res
    return wrapper


# Как работает с маршрутами:
@app.route(...)
@check_token
def get(self):
    return jsonify({"message": "Token is valid"})


# Необходимо сделать то же самое но с сессиями