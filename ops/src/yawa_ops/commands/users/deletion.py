import click
from yawac.api_client import PathParameter
from yawac.model.activate_user_request import ActivateUserRequest
from yawac.model.create_user_request import CreateUserRequest
from yawac.model.delete_user_request import DeleteUserRequest
from yawac.paths.users.post import CreateUser
from yawac.paths.users_username.delete import DeleteUser
from yawac.paths.users_username_activation.post import ActivateUser
from yawac.paths.users_username_tokens_activation.get import SendUserActivationToken
from yawac.paths.users_username_tokens_deletion.get import SendUserDeletionToken, RequestPathParams

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Delete a user.", cls=BaseCommand)
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
def delete_user(ctx, endpoint, profile, verify_ssl, ca_file, debug, username, token):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        path_params = RequestPathParams(username=username)
        body = DeleteUserRequest(token=token)
        return DeleteUser(api_client).delete_user(body=body, path_params=path_params)


@click.command(help="Send user deletion token.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--username",
    required=True,
    type=str,
    help="Username.",
)
def send_user_deletion_token(ctx, endpoint, profile, verify_ssl, ca_file, debug, username):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        path_params = RequestPathParams(username=username)
        return SendUserDeletionToken(api_client).send_user_deletion_token(path_params=path_params)
