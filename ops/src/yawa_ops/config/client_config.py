import yawac
from yawa_ops.config.constants import ADMIN_TOKEN, ENDPOINT


def build_client_config():
    configuration = yawac.Configuration(host=ENDPOINT)
    configuration.verify_ssl = False
    configuration.debug = True
    configuration.access_token = ADMIN_TOKEN
    return configuration
