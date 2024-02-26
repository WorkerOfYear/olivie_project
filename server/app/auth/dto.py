from flask_restx import Namespace, fields


class AuthDto:
    api = Namespace("auth", description="Authentication via server based sessions")

    user_obj = api.model(
        "User object",
        {
            "email": fields.String,
            "name": fields.String,
            "surname": fields.String,
            "phone_number": fields.String,
            "country": fields.String,
            "language": fields.String,
            "photo_url": fields.String,
            "created_date": fields.Date,
        },
    )

    auth_login = api.model(
        "Login data",
        {
            "email": fields.String(required=True),
            "password": fields.String(required=True),
        },
    )

    auth_register = api.model(
        "Registration data",
        {
            "email": fields.String(required=True),
            "password": fields.String(required=True),
        },
    )

    auth_success = api.model(
        "Auth success response",
        {
            "status": fields.Boolean,
            "message": fields.String,
            "user": fields.Nested(user_obj),
        },
    )
