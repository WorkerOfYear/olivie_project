from pprint import pprint
from loguru import logger
import requests



# token = Config.BUBBLE_TOKEN
base = 'http://127.0.0.1:5000'
json_data = {
    'address': 'Советская улица, 34, Новосибирск',
    'radius': 50
}

ans = requests.post(base+f'/geoapi/find_artists', json=json_data)

logger.debug(ans.text)
logger.debug(ans.json())