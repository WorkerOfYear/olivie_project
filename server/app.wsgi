# This part of file is for server, DO NOT CHANGE!
# run with:
# uwsgi --ini uwsgi.ini
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



# # This part of file is for local use!
# # run with:
# # uwsgi --ini uwsgi.ini
# import sys
# from os import getcwd, path
# from dotenv import load_dotenv

# project_home = '/Users/igorigor/VS_code/olivie_project/server'

# sys.path.insert(0, project_home)
# load_dotenv(path.join(project_home, '.env'))

# activate_this = project_home + '/venv/bin/activate_this.py'

# with open(activate_this) as file:
#     exec(file.read(), dict(__file__=activate_this))

# from app import app as application

# if __name__ == '__main__':
#     application.run()
