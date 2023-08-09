# This part of file is for server, DO NOT CHANGE!
# ----------------------------------------------

import sys
from os import getcwd
from dotenv import load_dotenv

project_home = '/var/www/olivie_project/server'

sys.insert(0, project_home)
load_dotenv(os.path.join(project_home, '.env'))

activate_this = getcwd() + '/home/tamada/.virtualenvs/flask_venv'

with open(activate_this) as file_:
    exec(file.read(), dict(__file__=activate_this))

from app import app as application

if __name__ == '__main__':
    application.run()