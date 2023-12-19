from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey

from typing import Optional, List
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey

from typing import Optional, List

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

    # artists: Mapped[List["Artist"]] = relationship(back_populates="owner")

    # children: Mapped[List["User"]] = relationship(back_populates="parent")

    # artists: Mapped[List["Artist"]] = relationship()

    # artists: Mapped[List["Artist"]] = relationship(back_populates="artist_owner")
    # reviews: Mapped[List["Review"]] = relationship("Review", back_populates="user")


    # children: Mapped[List["User"]] = relationship(back_populates="parent")

    # artists: Mapped[List["Artist"]] = relationship()

    # artists: Mapped[List["Artist"]] = relationship(back_populates="artist_owner")
    # reviews: Mapped[List["Review"]] = relationship("Review", back_populates="user")
