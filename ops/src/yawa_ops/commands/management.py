import click
import yawac
from yawac.paths.manage_health.get import Health
from yawa_ops.utils import logutils
from yawac.paths.manage_info.get import Info
from yawac.paths.manage_shutdown.post import Shutdown

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Describe the server health.")
def health():
    log.info("Describing the server health")

    with build_client() as api_client:
        try:
            api_response = Health(api_client).health()
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Describe the server info.")
def info():
    log.info("Describing the server info")

    with build_client() as api_client:
        try:
            api_response = Info(api_client).info()
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Shuts the server down.")
def shutdown():
    log.info("Shutting down the server")

    with build_client() as api_client:
        try:
            api_response = Shutdown(api_client).shutdown()
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
