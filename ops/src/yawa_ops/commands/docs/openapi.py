import click
from yawac.apis.paths.docs_openapi import DocsOpenapi
from yawac.paths.simple_greetings.get import GetGreetings

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawa_ops.utils.api import build_client, print_response

log = logutils.get_logger(__name__)


@click.command(help="Get OpenAPI definition.", cls=BaseCommand)
@click.pass_context
def openapi(ctx, endpoint, profile, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        return DocsOpenapi(api_client).get()
