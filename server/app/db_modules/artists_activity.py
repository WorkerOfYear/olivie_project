from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from . import Base


class ArtistActivity(Base):
	__tablename__ = "artist_activity"
    
    artist_id = Column(Integer, ForeignKey("artist.id"), primary_key=True)
    activity_id = Column(Integer, ForeignKey("activity.id"), primary_key=True)    
