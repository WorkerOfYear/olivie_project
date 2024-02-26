from flask import request
from flask_restx import Resource,  Namespace

from app.utils import validation_error


api: Namespace = AuthDto.api