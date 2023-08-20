from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import MappedAsDataclass

from . import Base


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(init=False, primary_key=True)
    email: Mapped[str] = mapped_column()
    pwd: Mapped[str] = mapped_column()
    name: Mapped[str]
    surname: Mapped[str]
    phone_number: Mapped[str]
    country: Mapped[str]
    language: Mapped[str]
    photo_url: Mapped[str]