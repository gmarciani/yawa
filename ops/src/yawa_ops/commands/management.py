import click
import yawac
from yawac.paths.manage_health.get import Health

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawac.paths.manage_info.get import Info
from yawac.paths.manage_shutdown.post import Shutdown

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Describe the server health.", cls=BaseCommand)
@click.pass_context
def health(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = Health(api_client).health()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Describe the server info.", cls=BaseCommand)
@click.pass_context
def info(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = Info(api_client).info()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Shuts the server down.", cls=BaseCommand)
@click.pass_context
def shutdown(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = Shutdown(api_client).shutdown()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
