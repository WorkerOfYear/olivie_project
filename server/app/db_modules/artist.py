from sqlalchemy.orm import Mapped, mapped_column, MappedAsDataclass, relationship
from dataclasses import dataclass

from . import Base
from typing import Optional, List


@dataclass
class Artist(Base):
    __tablename__ = "artist"

    id: Mapped[int] = mapped_column(init=False, primary_key=True)
    user_id: Mapped[int] = mapped_column(unique=True)
    artist_name: Mapped[str]
    email: Mapped[str]
    phone_number: Mapped[str]
    professional_webpage: Mapped[str]
    instagram_url: Mapped[str]
    facebook_url: Mapped[str]
    vk_url: Mapped[str]
    promo_video_url: Mapped[str]
    address: Mapped[str]
    location: Mapped[str]
    
    activities: Mapped[List["Activity"]] = relationship("Activity", secondary="artist_activity", back_populates="related_artists")
    location: Mapped[str]
    
    activities = relationship("Activity", secondary="artist_activity", back_populates="related_artists")
    reviews = relationship("Review", back_populates="artist")

