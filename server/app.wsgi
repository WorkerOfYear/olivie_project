# This part of file is for server, DO NOT CHANGE!
# run with:
# uwsgi --http 127.0.0.1:8000 --master -p 4 --wsgi-file app.wsgi
# ----------------------------------------------

import sys
from os import getcwd, path
from dotenv import load_dotenv

project_home = '/var/www/olivie_project/server'

sys.path.insert(0, project_home)
load_dotenv(path.join(project_home, '.env'))

activate_this = '/home/tamada/.virtualenvs/flask_venv/bin/activate_this.py'

with open(activate_this) as file:
    exec(file.read(), dict(__file__=activate_this))

from app import app as application

if __name__ == '__main__':
    application.run()

# ----------------------------------------------
