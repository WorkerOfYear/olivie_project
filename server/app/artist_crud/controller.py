from flask import request
from flask_restx import Resource, Namespace

from app.utils import validation_error

from .service import ArtistService
from .dto import ArtistDto
from .utils import CreateSchema

api: Namespace = ArtistDto.api
create_success = ArtistDto.create_success

create_schema = CreateSchema()

@api.route("/create")
class ArtistResource(Resource):
    """Artist create endpoint"""

    artist_obj = ArtistDto.artist_obj

    @api.doc(
        "Artist create",
        responses={
            201: ("Artist created", create_success),
            400: "Validations failed.",
        },
    )
    @api.expect(artist_obj, validate=True)
    def post(self):
        # Grab the json data
        create_data = request.get_json()

        # Validate data
        if errors := create_schema.validate(create_data):
            return validation_error(False, errors), 400

        return ArtistService.create(create_data)
