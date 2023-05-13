import click.core

from yawa_ops.config.constants import ENDPOINT, CA_FILE, Identity, IDENTITY, TOKEN, TOKENS
from yawa_ops.utils import logutils

ENDPOINT_OPTION = click.Option(
    ("--endpoint",), default=ENDPOINT, show_default=True, type=str, help="Service endpoint."
)

IDENTITY_OPTION = click.Option(
    ("--identity",), default=IDENTITY.value, show_default=True, type=click.Choice(Identity.values(), case_sensitive=False),
    callback=lambda c, p, v: Identity.parse(v) if v else None,
    help="Identity."
)

ACCESS_TOKEN_OPTION = click.Option(
    ("--access-token",), default=None, show_default=True,
    type=str, help="JWT access token."
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
        self.params.insert(1, IDENTITY_OPTION)
        self.params.insert(2, ACCESS_TOKEN_OPTION)
        self.params.insert(3, VERIFY_SSL_OPTION)
        self.params.insert(4, CA_FILE)
        self.params.insert(5, DEBUG_OPTION)

    def invoke(self, ctx: click.Context):
        log.info(f"Executing command: {ctx.command.name}")
        ctx.obj['CLIENT_CONFIG'] = dict(
            endpoint=ctx.params.get(ENDPOINT_OPTION.name),
            access_token=ctx.params.get(ACCESS_TOKEN_OPTION.name) or TOKENS[ctx.params.get(IDENTITY_OPTION.name)],
            verify_ssl=ctx.params.get(VERIFY_SSL_OPTION.name),
            ca_file=ctx.params.get(CA_FILE.name),
            debug=ctx.params.get(DEBUG_OPTION.name)
        )
        super().invoke(ctx)
