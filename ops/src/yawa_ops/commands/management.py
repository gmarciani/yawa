import json

import click
import yawac
from yawac.paths.manage_health.get import Health

from yawa_ops.config.client_config import build_client_config
from yawa_ops.utils import logutils
from yawac.paths.manage_info.get import Info
from yawac.paths.manage_shutdown.post import Shutdown

log = logutils.get_logger(__name__)


@click.command(help="Describe the server health.")
def health():
    log.info("Describing the server health")

    with yawac.ApiClient(build_client_config()) as api_client:
        try:
            api_response = Health(api_client).health()
            print(json.dumps(api_response.body, indent=2))
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Describe the server info.")
def info():
    log.info("Describing the server info")

    with yawac.ApiClient(build_client_config()) as api_client:
        try:
            api_response = Info(api_client).info()
            print(json.dumps(api_response.body, indent=2))
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Shuts the server down.")
def shutdown():
    log.info("Shutting down the server")

    with yawac.ApiClient(build_client_config()) as api_client:
        try:
            api_response = Shutdown(api_client).shutdown()
            print(json.dumps(api_response.body, indent=2))
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
