from flask_restx import Namespace, fields


class ArtistDto:
    api = Namespace("artist-crud", description="Manipulation of artist model")

    artist_obj = api.model(
        "Artist object",
        {
            "user_id": fields.Integer(required=True),
            "artist_name": fields.String(required=True),
            "description": fields.String,
            "email": fields.String,
            "phone_number": fields.String,
            "photo_url": fields.String,
            "professional_webpage": fields.String,
            "instagram_url": fields.String,
            "facebook_url": fields.String,
            "vk_url": fields.String,
            "promo_video_url": fields.String,
            "address": fields.String(required=True),
            "location": fields.String,
            "is_premium": fields.Boolean,
            "created_date": fields.Date,
        },
    )
