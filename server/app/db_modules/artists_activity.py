from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from . import Base


class ArtistActivity(Base):
	__tablename__ = "artist_activity"

    artist_id: Mapped[int] = mapped_column(ForeignKey("artist.id"))
    activity_id: Mapped[int] = mapped_column(ForeignKey("activity.id"))


