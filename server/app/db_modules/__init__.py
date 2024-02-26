from flask_sqlalchemy import SQLAlchemy
from flask_sqlalchemy.model import Model, BindMetaMixin
from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base

class NoNameMeta(BindMetaMixin, DeclarativeMeta):
    """subclasses will be converted to dataclasses"""


db = SQLAlchemy(model_class=declarative_base(cls=Model, metaclass=NoNameMeta))