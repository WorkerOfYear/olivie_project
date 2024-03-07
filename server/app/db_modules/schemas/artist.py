from app import ma
from app.db_modules.artist import Artist


class ArtistSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Artist
        include_fk = True
