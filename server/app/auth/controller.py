from flask import request
from flask_restx import Resource,  Namespace

from app.utils import validation_error

from .service import AuthService
from .dto import AuthDto
from .utils import LoginSchema, RegisterSchema

api: Namespace = AuthDto.api
auth_success = AuthDto.auth_success

login_schema = LoginSchema()
register_schema = RegisterSchema()


@api.route("/login")
class AuthLogin(Resource):
    """User login endpoint
    User registers then receives the user's information
    """

    auth_login = AuthDto.auth_login

    @api.doc(
        "Auth login",
        responses={
            200: ("Logged in", auth_success),
            400: "Validations failed.",
            401: "Incorrect password or Email.",
        },
    )
    @api.expect(auth_login, validate=True)
    def post(self):
        """Login using email and password"""
        # Grab the json data
        login_data = request.get_json()

        # Validate data
        if errors := login_schema.validate(login_data):
            return validation_error(False, errors), 400

        return AuthService.login(login_data)


@api.route("/register")
class AuthRegister(Resource):
    """User register endpoint
    User registers then receives the user's information
    """

    auth_register = AuthDto.auth_register

    @api.doc(
        "Auth registration",
        responses={
            201: ("Successfully registered user.", auth_success),
            400: "Malformed data or validations failed.",
            403: "Email is already being used.",
        },
    )
    @api.expect(auth_register, validate=True)
    def post(self):
        """User registration"""
        #  Grab the json data
        register_data = request.get_json()

        # Validate data
        if errors := register_schema.validate(register_data):
            return validation_error(False, errors), 400

        return AuthService.register(register_data)


@api.route("/logout")
class AuthLogout(Resource):
    """User logout endpoint
    User pop current session id
    """

    @api.doc(
        "Logout user",
        responses={
            200: "Successfully logout user.",
        },
    )
    def get(self):
        return AuthService.logout()


@api.route("/check_session")
class AuthLogout(Resource):
    """Check session endpoint
    Check session of current user
    """

    @api.doc(
        "Check user",
        responses={
            200: "Successfully checked.", 
            401: "Unauthorized",
        },
    )
    def get(self):
        return AuthService.check_session()
