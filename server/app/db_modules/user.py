from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import MappedAsDataclass

from . import Base


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(init=False, primary_key=True)
    name: Mapped[str]
    surname: Mapped[str]
    email: Mapped[str]
    pwd: Mapped[str]
    phone_number: Mapped[str]
    country: Mapped[str]
    language: Mapped[str]
    photo_url: Mapped[str]