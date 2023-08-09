from pprint import pprint
from loguru import logger
import requests


# token = Config.BUBBLE_TOKEN
base = 'http://127.0.0.1:5000'


ans = requests.get(base+f'/auth/login?login')

logger.debug(ans.text)