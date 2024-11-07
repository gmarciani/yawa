import click
from yawac.model.activate_user_request import ActivateUserRequest
from yawac.model.create_user_request import CreateUserRequest
from yawac.paths.users.post import CreateUser
from yawac.paths.users_username_activation.post import ActivateUser, RequestPathParams
from yawac.paths.users_username_tokens_activation.get import SendUserActivationToken

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Register a new user.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--username",
    required=True,
    type=str,
    help="Username.",
)
@click.option(
    "--password",
    required=True,
    type=str,
    help="Password.",
)
@click.option(
    "--email",
    required=True,
    type=str,
    help="Email.",
)
def create_user(ctx, endpoint, profile, verify_ssl, ca_file, debug, username, password, email):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        body = CreateUserRequest(username=username, password=password, email=email)
        response = CreateUser(api_client).create_user(body=body)
        print_response(response)


@click.command(help="Activate user.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--username",
    required=True,
    type=str,
    help="Username.",
)
@click.option(
    "--token",
    required=True,
    type=str,
    help="Activation token.",
)
def activate_user(ctx, endpoint, profile, verify_ssl, ca_file, debug, username, token):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        path_params = RequestPathParams(username=username)
        body = ActivateUserRequest(token=token)
        response = ActivateUser(api_client).activate_user(body=body, path_params=path_params)
        print_response(response)


@click.command(help="Send user activation token.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--username",
    required=True,
    type=str,
    help="Username.",
)
def send_user_activation_token(ctx, endpoint, profile, verify_ssl, ca_file, debug, username):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        path_params = RequestPathParams(username=username)
        response = SendUserActivationToken(api_client).send_user_activation_token(path_params=path_params)
        print_response(response)
