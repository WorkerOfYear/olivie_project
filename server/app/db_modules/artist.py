from typing import Optional, List
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from . import Base

class Artist(Base):
    __tablename__ = "artist"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    artist_name: Mapped[str]
    description: Mapped[Optional[str]] = None
    email: Mapped[Optional[str]] = None
    phone_number: Mapped[Optional[str]] = None
    photo_url: Mapped[Optional[str]] = None
    professional_webpage: Mapped[Optional[str]] = None
    instagram_url: Mapped[Optional[str]] = None
    facebook_url: Mapped[Optional[str]] = None
    vk_url: Mapped[Optional[str]] = None
    promo_video_url: Mapped[Optional[str]] = None
    address: Mapped[str]
    location: Mapped[Optional[str]] = None
    is_premium: Mapped[bool] = False

    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user: Mapped["User"] = relationship(back_populates="artist")

    activities: Mapped[List["Activity"]] = relationship(
        secondary="artist_activity", back_populates="related_artists"
    )

    reviews: Mapped[List["Review"]] = relationship(back_populates="artist")

    def __repr__(self):
        return f"<Artist {self.artist_name}>"