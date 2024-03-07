from typing import Optional, List
from dataclasses import dataclass
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship

from . import Base


class Activity(Base):
    __tablename__ = "activity"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)

    related_artists: Mapped[List["Artist"]] = relationship(
        "Artist", secondary="artist_activity", back_populates="activities"
    )
