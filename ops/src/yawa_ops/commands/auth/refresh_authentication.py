import click
from yawac.model.refresh_authentication_request import RefreshAuthenticationRequest
from yawac.paths.auth_username_tokens.post import RequestPathParams, RefreshAuthentication

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils

from yawa_ops.utils.api import build_client

log = logutils.get_logger(__name__)


@click.command(help="Refresh authentication.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--username",
    required=True,
    help="Username.",
)
@click.option(
    "--refresh-token",
    required=True,
    help="Refresh token.",
)
def refresh_authentication(ctx, endpoint, profile, verify_ssl, ca_file, debug, username, refresh_token):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        path_params = RequestPathParams(username=username)
        request = RefreshAuthenticationRequest(refreshToken=refresh_token)
        return RefreshAuthentication(api_client).refresh_authentication(path_params=path_params, body=request)
