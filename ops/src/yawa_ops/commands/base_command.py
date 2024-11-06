import json

import click.core
import yawac

from yawa_ops.config.constants import DEFAULT_ENDPOINT, CA_FILE, DEFAULT_PROFILE
from yawa_ops.config.profiles import load_profile
from yawa_ops.exceptions.cli_exceptions import ClientError
from yawa_ops.utils import logutils

ENDPOINT_OPTION = click.Option(
    ("--endpoint",), default=DEFAULT_ENDPOINT, show_default=True, type=str, help="Service endpoint."
)

PROFILE_OPTION = click.Option(
    ("--profile",), default=DEFAULT_PROFILE, show_default=True, type=str, help="Profile."
)

VERIFY_SSL_OPTION = click.Option(
    ("--verify-ssl/--no-verify-ssl",), default=True, show_default=True, type=bool,
    help="Activate/Deactivate SSL verification."
)

CA_FILE = click.Option(
    ("--ca-file",), default=CA_FILE, show_default=True, type=click.Path(exists=True, dir_okay=False, resolve_path=True),
    help="The CA certificate file."
)

DEBUG_OPTION = click.Option(
    ("--debug/--no-debug",), default=False, show_default=True, type=bool,
    help="Activate/Deactivate debug mode."
)

log = logutils.get_logger(__name__)


class BaseCommand(click.core.Command):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.params.insert(0, ENDPOINT_OPTION)
        self.params.insert(1, PROFILE_OPTION)
        self.params.insert(2, VERIFY_SSL_OPTION)
        self.params.insert(3, CA_FILE)
        self.params.insert(4, DEBUG_OPTION)

    def invoke(self, ctx: click.Context):
        logutils.set_level("DEBUG" if ctx.params.get(DEBUG_OPTION.name) else "INFO")
        log.debug(f"Executing command: {ctx.command.name}")
        profile_name = ctx.params.get(PROFILE_OPTION.name)
        ctx.obj['CLIENT_CONFIG'] = dict(
            endpoint=ctx.params.get(ENDPOINT_OPTION.name),
            profile=load_profile(profile_name) if profile_name else None,
            verify_ssl=ctx.params.get(VERIFY_SSL_OPTION.name),
            ca_file=ctx.params.get(CA_FILE.name),
            debug=ctx.params.get(DEBUG_OPTION.name)
        )
        try:
            super().invoke(ctx)
        except yawac.ApiException as e:
            log.error("API error: %s" % e)
            print(json.dumps(ClientError(e).__dict__, indent=4))
        else:
            log.error("Unknown error")
