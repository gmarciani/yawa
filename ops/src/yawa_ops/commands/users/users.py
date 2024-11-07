import click

from yawa_ops.commands.users.creation import create_user, activate_user, send_user_activation_token
from yawa_ops.commands.users.deletion import delete_user, send_user_deletion_token
from yawa_ops.commands.users.password import reset_password, send_password_reset_token
from yawa_ops.utils import logutils, guiutils
from yawa_ops.cli import main

log = logutils.get_logger(__name__)


# @main.group(
#     help="Users management.",
#     invoke_without_command=True
# )
# @click.pass_context
# def users(ctx, debug=False):
#     if ctx.invoked_subcommand is None:
#         print(ctx.get_help())
#     else:
#         ctx.ensure_object(dict)
#         ctx.obj["DEBUG"] = debug
#         logutils.set_level("DEBUG" if debug else "INFO")
#
#
# users.add_command(create_user)
# users.add_command(activate_user)
# users.add_command(send_user_activation_token)
# users.add_command(delete_user)
# users.add_command(send_user_deletion_token)
# users.add_command(reset_password)
# users.add_command(send_password_reset_token)
