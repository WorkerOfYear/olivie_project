from flask_sqlalchemy import SQLAlchemy
from flask_sqlalchemy.model import Model, BindMetaMixin
from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base


class NoNameMeta(BindMetaMixin, DeclarativeMeta):
    """subclasses will be converted to dataclasses"""

Base = declarative_base(cls=Model, metaclass=NoNameMeta)
db = SQLAlchemy(model_class=Base)

from .artist import Artist
from .activity import Activity
from .artist_activity import ArtistActivity
from .review import Review
from .user import User

