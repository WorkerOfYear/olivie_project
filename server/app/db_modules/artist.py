from sqlalchemy.orm import Mapped, mapped_column, MappedAsDataclass, relationship
from dataclasses import dataclass

from . import Base
from typing import Optional, List


@dataclass
class Artist(Base):
    __tablename__ = "artist"

    id: Mapped[int] = mapped_column(init=False, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(unique=True)
    artist_name: Mapped[str]
    description: Mapped[Optional[str]] = None
    email: Mapped[str]
    phone_number: Mapped[str]
    photo_url: Mapped[Optional[str]] = None
    professional_webpage: Mapped[Optional[str]] = None
    instagram_url: Mapped[Optional[str]] = None
    facebook_url: Mapped[Optional[str]] = None
    vk_url: Mapped[Optional[str]] = None
    promo_video_url: Mapped[Optional[str]] = None
    address: Mapped[str]
    location: Mapped[Optional[str]] = None
    is_premium: Mapped[bool]

    # activities = relationship("Activity", secondary="artist_activity", back_populates="related_artists")
    # reviews = relationship("Review", back_populates="artist")
    
    activities: Mapped[List["Activity"]] = relationship("Activity", secondary="artist_activity", back_populates="related_artists")
    # location: Mapped[str]
    
    # activities = relationship("Activity", secondary="artist_activity", back_populates="related_artists")
    reviews: Mapped[List["Review"]] = relationship("Review", back_populates="artist")

