from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship

from . import Base


class Activity(Base):
    __tablename__ = "activity"

    id: Mapped[int] = mapped_column(init=False, primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)
    is_active: Mapped[bool] = mapped_column(default=True)

    related_artists = relationship("Artist", secondary="artist_activity", back_populates="activities")
