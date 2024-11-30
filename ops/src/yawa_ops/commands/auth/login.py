import click
from yawac.paths.auth_login.post import Login

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawac.model.login_request import LoginRequest

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Login.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--username",
    required=True,
    help="Username.",
)
@click.option(
    "--password",
    required=True,
    help="Password.",
)
@click.option(
    "--never-expire",
    required=False,
    default=False,
    show_default=True,
    help="Credentials without expiration.",
)
def login(ctx, endpoint, profile, verify_ssl, ca_file, debug, username, password, never_expire):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        request = LoginRequest(username=username, password=password, neverExpire=never_expire)
        return Login(api_client).login(body=request)
