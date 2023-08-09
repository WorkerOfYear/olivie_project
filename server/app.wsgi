import sys
from os import getcwd
# from dotenv import load_dotenv

sys.insert(0, getcwd())
# project_home = '/home/pavelmalevin/web/unitapi'
# load_dotenv(os.path.join(project_home, '.env'))

activate_this = getcwd() + '/venv/bin/activate_this.py'

with open(activate_this) as file_:
    exec(file.read(), dict(__file__=activate_this))


from app import app as application