import click
import yawac
from yawac.apis.paths.users_username_tokens_activation import UsersUsernameTokensActivation
from yawac.apis.paths.users import Users
from yawac.model.activate_user_request import ConfirmUserCreationRequest
from yawac.model.create_user_request import CreateUserRequest

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Register a new user.", cls=BaseCommand)
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
    "--email",
    required=True,
    help="Email.",
)
def create_user(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug, username, password, email):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        request = CreateUserRequest(username=username, password=password, email=email)
        response = CreateUser(api_client).post(body=request)
        print_response(response)


@click.command(help="Confirm user creation.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--token-id",
    required=True,
    type=str,
    help="Token id.",
)
def confirm_user_creation(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug, token_id):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        request = ConfirmUserCreationRequest(tokenId=token_id)
        response = ConfirmUserCreation(api_client).post(body=request)
        print_response(response)
