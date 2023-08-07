from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import MappedAsDataclass
from flask_sqlalchemy import SQLAlchemy
from app import app


class Base(MappedAsDataclass, DeclarativeBase):
    """subclasses will be converted to dataclasses"""


db = SQLAlchemy(app)