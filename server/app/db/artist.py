from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import MappedAsDataclass

from . import Base
from typing import Optional


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
    # location: Mapped[str] # Mapped[Optional[str]]
    loc: Mapped[str]
