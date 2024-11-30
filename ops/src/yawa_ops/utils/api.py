import json

import yawac
from yawac import api_client

from yawa_ops.config.profiles import Profile
from yawa_ops.utils import logutils

log = logutils.get_logger(__name__)


def build_client(
        endpoint: str,
        profile: str = None,
        ca_file: str = None,
        verify_ssl: bool = True,
        debug: bool = False):
    config = build_client_config(
        endpoint=endpoint,
        profile=profile,
        debug=debug,
        verify_ssl=verify_ssl,
        ca_file=ca_file,
    )
    return yawac.ApiClient(config)


def build_client_config(
        endpoint: str,
        profile: Profile = None,
        ca_file: str = None,
        verify_ssl: bool = True,
        debug: bool = False):
    log.debug(f"Building client configuration with "
              f"endpoint={endpoint}, "
              f"profile={profile}, "
              f"verify_ssl={verify_ssl}, "
              f"ca_file={ca_file}, "
              f"debug={debug}"
    )
    configuration = yawac.Configuration(host=endpoint)
    configuration.access_token = profile.credentials.access_token if profile else None
    configuration.verify_ssl = verify_ssl
    configuration.ssl_ca_cert = ca_file
    configuration.debug = debug
    return configuration


def print_response(api_response: api_client.ApiResponse):
    j = json.loads(api_response.response.data.decode("utf-8"))
    print(json.dumps(j, indent=2))


def print_error(error: yawac.ApiException):
    j = json.loads(error.body.decode("utf-8"))
    print(json.dumps(j, indent=2))
