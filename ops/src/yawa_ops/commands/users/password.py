import click
from yawac.model.activate_user_request import ActivateUserRequest
from yawac.model.create_user_request import CreateUserRequest
from yawac.model.delete_user_request import DeleteUserRequest
from yawac.model.reset_password_request import ResetPasswordRequest
from yawac.paths.users.post import CreateUser
from yawac.paths.users_username.delete import DeleteUser, RequestPathParams
from yawac.paths.users_username_activation.post import ActivateUser
from yawac.paths.users_username_password.patch import ResetPassword
from yawac.paths.users_username_tokens_activation.get import SendUserActivationToken
from yawac.paths.users_username_tokens_deletion.get import SendUserDeletionToken
from yawac.paths.users_username_tokens_password.get import SendPasswordResetToken

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Reset password.", cls=BaseCommand)
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
    help="New password.",
)
@click.option(
    "--token",
    required=True,
    type=str,
    help="Activation token.",
)
def reset_password(ctx, endpoint, profile, verify_ssl, ca_file, debug, username, password, token):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        path_params = RequestPathParams(username=username)
        body = ResetPasswordRequest(password=password, token=token)
        response = ResetPassword(api_client).reset_password(body=body, path_params=path_params)
        print_response(response)


@click.command(help="Send password reset token.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--username",
    required=True,
    type=str,
    help="Username.",
)
def send_password_reset_token(ctx, endpoint, profile, verify_ssl, ca_file, debug, username):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        path_params = RequestPathParams(username=username)
        response = SendPasswordResetToken(api_client).send_password_reset_token(path_params=path_params)
        print_response(response)
