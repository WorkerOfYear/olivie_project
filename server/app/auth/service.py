from datetime import datetime
from sqlalchemy import select
from flask import current_app, session

from app import db
from app.db_modules.user import User
from app.db_modules.schemas.user import UserSchema
from app.utils import message, err_resp, internal_err_resp, unauth_err_resp


user_schema = UserSchema()


class AuthService:
    @staticmethod
    def login(data):
        email = data["email"]
        password = data["password"]

        try:
            user: User | None = db.session.query(User).filter(User.email == email).first()

            if user and user.verify_password(password):
                user_info = user_schema.dump(user)

                resp = message(True, "Successfully logged in.")
                resp["user"] = user_info

                session["user_id"] = user.id

                return resp, 200

            return err_resp(
                "Failed to log in, email or password may be incorrect.",
                "email_or_pwd_invalid",
                401,
            )

        except Exception as error:
            current_app.logger.error(error)
            return internal_err_resp()

    @staticmethod
    def register(data):
        # Required values
        email = data["email"]
        password = data["password"]

        # Optional
        data_name = data.get("name")
        data_surname = data.get("surname")
        data_phone_number = data.get("phone_number")
        data_country = data.get("country")
        data_language = data.get("language")
        data_photo_url = data.get("photo_url")

        # Check if the email is taken
        user: User | None = db.session.query(User).filter(User.email == email).first()

        if user is not None:
            return err_resp("Email is already being used.", "email_taken", 403)

        try:
            new_user = User(
                email=email,
                password=password,
                name=data_name,
                surname=data_surname,
                phone_number=data_phone_number,
                country=data_country,
                language=data_language,
                photo_url=data_photo_url,
            )

            db.session.add(new_user)
            db.session.flush()

            # Load the new user's info
            user_info = user_schema.dump(new_user)

            # Commit changes to DB
            db.session.commit()

            # Create session in redis
            session["user_id"] = new_user.id

            resp = message(True, "User has been registered.")
            resp["user"] = user_info

            return resp, 201

        except Exception as error:
            current_app.logger.error(error)
            return internal_err_resp()

    @staticmethod
    def logout():
        session.pop("user_id")
        resp = message(True, "User has been logout")

        return resp, 200

    @staticmethod
    def check_session():
        user_id = session.get("user_id")

        if not user_id:
            return unauth_err_resp()
        
        user: User | None = db.session.query(User).filter(User.id == user_id).first()

        user_info = user_schema.dump(user)

        resp = message(True, "Successfully checked.")
        resp["user"] = user_info

        return resp, 200