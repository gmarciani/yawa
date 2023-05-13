import click
import yawac
from yawac.paths.manage_health.get import Health

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.config.constants import TOKENS
from yawa_ops.utils import logutils
from yawac.paths.manage_info.get import Info
from yawac.paths.manage_shutdown.post import Shutdown

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Describe the server health.", cls=BaseCommand)
def health(endpoint, identity, access_token, verify_ssl, ca_file, debug):
    log.info("Describing the server health")

    with build_client(endpoint=endpoint, access_token=access_token or TOKENS[identity], verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            response = Health(api_client).health()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Describe the server info.", cls=BaseCommand)
def info(endpoint, identity, access_token, verify_ssl, ca_file, debug):
    log.info("Describing the server info")

    with build_client(endpoint=endpoint, access_token=access_token or TOKENS[identity], verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            response = Info(api_client).info()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Shuts the server down.", cls=BaseCommand)
def shutdown(endpoint, identity, access_token, verify_ssl, ca_file, debug):
    log.info("Shutting down the server")

    with build_client(endpoint=endpoint, access_token=access_token or TOKENS[identity], verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            response = Shutdown(api_client).shutdown()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
