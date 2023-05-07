import json

import yawac


def build_client(debug=False, verify_ssl=True, ca_file=None, access_token=None, endpoint=None):
    config = build_client_config(
        endpoint=endpoint,
        access_token=access_token,
        debug=debug,
        verify_ssl=verify_ssl,
        ca_file=ca_file,
    )
    return yawac.ApiClient(config)


def build_client_config(endpoint=None, access_token=None, verify_ssl=True, ca_file=None, debug=False):
    configuration = yawac.Configuration(host=endpoint)
    configuration.access_token = access_token
    configuration.verify_ssl = verify_ssl
    configuration.ssl_ca_cert = ca_file
    configuration.debug = debug
    return configuration


def print_response(api_response):
    j = json.loads(api_response.response.data.decode("utf-8"))
    print(json.dumps(j, indent=2))
