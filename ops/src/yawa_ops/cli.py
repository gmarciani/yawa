#!/usr/bin/env python
import sys

import click

from yawa_ops.commands.admin.email import send_mail
from yawa_ops.commands.auth.login import login
from yawa_ops.commands.auth.logout import logout
from yawa_ops.commands.docs.openapi import openapi
from yawa_ops.commands.admin.management import info, shutdown, health
from yawa_ops.commands.simple.get_outcome import get_outcome
from yawa_ops.commands.simple.get_greetings import get_greetings
from yawa_ops.commands.users.creation import create_user, activate_user, send_user_activation_token
from yawa_ops.commands.users.deletion import send_user_deletion_token, delete_user
from yawa_ops.commands.users.password import reset_password, send_password_reset_token
from yawa_ops.config.metadata import NAME, VERSION
from yawa_ops.utils import guiutils, logutils

log = logutils.get_logger(__name__)


@click.group(invoke_without_command=True, context_settings=dict(max_content_width=120))
@click.pass_context
@click.version_option(version=VERSION)
def main(ctx, debug=False):
    print(guiutils.get_splash(NAME), file=sys.stderr)
    if ctx.invoked_subcommand is None:
        print(ctx.get_help())
    else:
        ctx.ensure_object(dict)
        ctx.obj["DEBUG"] = debug
        logutils.set_level("DEBUG" if debug else "INFO")


# Management
main.add_command(info)
main.add_command(health)
main.add_command(shutdown)

# Docs
main.add_command(openapi)

# Admin
main.add_command(send_mail)

# Auth
main.add_command(login)
main.add_command(logout)

# Users
main.add_command(create_user)
main.add_command(activate_user)
main.add_command(send_user_activation_token)
main.add_command(delete_user)
main.add_command(send_user_deletion_token)
main.add_command(reset_password)
main.add_command(send_password_reset_token)

# Simple
main.add_command(get_greetings)
main.add_command(get_outcome)


if __name__ == "__main__":
    main(obj={})
