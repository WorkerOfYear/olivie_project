from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_session import Session
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

bcrypt = Bcrypt()
migrate = Migrate()
cors = CORS()

session = Session()
ma = Marshmallow()
