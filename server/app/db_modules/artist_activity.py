from dataclasses import dataclass
from sqlalchemy import Column, Integer, ForeignKey

from app import db

class ArtistActivity(db.Model):
    __tablename__ = "artist_activity"
      
    artist_id = Column(Integer, ForeignKey("artist.id"), primary_key=True)
    activity_id = Column(Integer, ForeignKey("activity.id"), primary_key=True)   
