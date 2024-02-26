from datetime import datetime
from typing import Optional, List
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, String, DateTime

from app import db, bcrypt


class User(db.Model):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(64), unique=True)
    password_hash: Mapped[str] = mapped_column(String(128))

    name: Mapped[Optional[str]]
    surname: Mapped[Optional[str]]
    phone_number: Mapped[Optional[str]]
    country: Mapped[Optional[str]]
    language: Mapped[Optional[str]]
    photo_url: Mapped[Optional[str]]

    created_date: Mapped[str] = mapped_column(DateTime, default=datetime.utcnow)

    @property
    def password(self):
        raise AttributeError("Password is not a readable attribute")

    @password.setter
    def password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode("utf-8")

    def verify_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"<User {self.username}>"