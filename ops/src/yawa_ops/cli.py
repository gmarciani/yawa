#!/usr/bin/env python

import click

from yawa_ops.commands.admin import send_mail
from yawa_ops.commands.auth import login, logout, get_authenticated_hello
from yawa_ops.commands.management import info, shutdown, health
from yawa_ops.commands.open import get_random_outcome
from yawa_ops.commands.users import create_user, confirm_user_creation
from yawa_ops.config.metadata import NAME, VERSION
from yawa_ops.utils import guiutils, logutils

log = logutils.get_logger(__name__)


@click.group(invoke_without_command=True, context_settings=dict(max_content_width=120))
@click.pass_context
@click.version_option(version=VERSION)
def main(ctx, debug=False):
    print(guiutils.get_splash(NAME))
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

# Admin
main.add_command(send_mail)

# Auth
main.add_command(login)
main.add_command(logout)
main.add_command(get_authenticated_hello)

# Open
main.add_command(get_random_outcome)

# Users
main.add_command(create_user)
main.add_command(confirm_user_creation)


if __name__ == "__main__":
    main(obj={})
