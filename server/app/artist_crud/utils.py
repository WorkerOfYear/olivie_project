from marshmallow import Schema, fields
from marshmallow.validate import Regexp, Length

class CreateSchema(Schema):
    """/artist-crud/create [POST]

    Parameters:
    - Email
    - Password (Str)
    """

    artist_name = fields.Str(required=True)
    description = fields.Str()
    email = fields.Str()
    phone_number = fields.Str()
    photo_url = fields.Str()
    professional_webpage = fields.Str()
    instagram_url = fields.Str()
    facebook_url = fields.Str()
    vk_url = fields.Str()
    promo_video_url = fields.Str()
    address = fields.Str(required=True)
    is_premium = fields.Bool()
    activities = fields.List(fields.Str)