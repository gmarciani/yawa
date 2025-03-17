import click
from yawac.apis.paths.simple_outcome import SimpleOutcome

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawa_ops.utils.api import build_client

log = logutils.get_logger(__name__)


@click.command(help="Get Greetings.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--outcome",
    required=True,
    help="Outcome.",
)
def get_outcome(ctx, endpoint, profile, verify_ssl, ca_file, debug, outcome):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        return SimpleOutcome(api_client).get(
            query_params={
                "outcome": outcome,
            }
        )
