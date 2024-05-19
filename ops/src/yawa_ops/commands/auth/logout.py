import click
import yawac
from yawac.paths.auth_logout.post import Logout

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Logout.", cls=BaseCommand)
@click.pass_context
def logout(ctx, endpoint, profile, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = Logout(api_client).logout()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
