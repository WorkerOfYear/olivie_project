from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from . import Base


class Review(Base):
    __tablename__ = "review"

    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), primary_key=True)
    artist_id: Mapped[int] = mapped_column(Integer, ForeignKey("artist.id"), primary_key=True)
    grade: Mapped[int]
    comment: Mapped[str]

    artist = relationship("Artist", back_populates="reviews")
