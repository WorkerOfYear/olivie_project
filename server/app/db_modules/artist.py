from typing import Optional, List
from sqlalchemy.orm import Mapped, mapped_column, MappedAsDataclass, relationship

from app import db


class Artist(db.Model):
    __tablename__ = "artist"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(unique=True)
    artist_name: Mapped[str] = mapped_column(max=24)

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

    activities: Mapped[List["Activity"]] = relationship(
        "Activity", secondary="artist_activity", back_populates="related_artists"
    )
    reviews: Mapped[List["Review"]] = relationship("Review", back_populates="artist")
