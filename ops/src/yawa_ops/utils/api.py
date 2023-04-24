import json

import yawac

from yawa_ops.config.constants import ENDPOINT, ADMIN_TOKEN


def build_client():
    return yawac.ApiClient(build_client_config())


def build_client_config():
    configuration = yawac.Configuration(host=ENDPOINT)
    configuration.verify_ssl = False
    configuration.debug = True
    configuration.access_token = ADMIN_TOKEN
    return configuration


def print_response(api_response):
    j = json.loads(api_response.response.data.decode("utf-8"))
    print(json.dumps(j, indent=2))
