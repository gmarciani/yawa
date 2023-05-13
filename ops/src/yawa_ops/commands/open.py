import click
import yawac
from yawac.apis.tags.get_random_outcome_api import GetRandomOutcomeApi

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Request a random outcome.", cls=BaseCommand)
@click.pass_context
def get_random_outcome(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = GetRandomOutcomeApi(api_client).get_random_outcome()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
