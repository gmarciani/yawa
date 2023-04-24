import json

import yawac


def build_client(debug=False, verify_ssl=True, access_token=None, endpoint=None):
    config = build_client_config(
        endpoint=endpoint,
        access_token=access_token,
        debug=debug,
        verify_ssl=verify_ssl
    )
    return yawac.ApiClient(config)


def build_client_config(endpoint=None, access_token=None, verify_ssl=True, debug=False):
    configuration = yawac.Configuration(host=endpoint)
    configuration.access_token = access_token
    configuration.verify_ssl = verify_ssl
    configuration.debug = debug
    return configuration


def print_response(api_response):
    j = json.loads(api_response.response.data.decode("utf-8"))
    print(json.dumps(j, indent=2))
