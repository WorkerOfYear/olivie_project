from sqlalchemy import Column, Integer, ForeignKey
from dataclasses import dataclass

from . import Base


@dataclass
class ArtistActivity(Base):
    __tablename__ = "artist_activity"
      
    artist_id = Column(Integer, ForeignKey("artist.id"), primary_key=True)
    activity_id = Column(Integer, ForeignKey("activity.id"), primary_key=True)   
