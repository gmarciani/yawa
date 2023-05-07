import click.core

from yawa_ops.config.constants import ENDPOINT, ADMIN_TOKEN, CA_FILE

ENDPOINT_OPTION = click.Option(
    ("--endpoint",), default=ENDPOINT, show_default=True, type=str, help="Service endpoint."
)

ACCESS_TOKEN_OPTION = click.Option(
    ("--access-token",), default=ADMIN_TOKEN, show_default=True, type=str, help="JWT access token."
)

VERIFY_SSL_OPTION = click.Option(
    ("--verify-ssl/--no-verify-ssl",), default=True, show_default=True, type=bool, help="Activate/Deactivate SSL verification."
)

CA_FILE = click.Option(
    ("--ca-file",), default=CA_FILE, show_default=True, type=click.Path(exists=True, file_okay=True, dir_okay=False, readable=True, resolve_path=True), help="The CA certificate file."
)

DEBUG_OPTION = click.Option(
    ("--debug/--no-debug",), default=False, show_default=True, type=bool, help="Activate/Deactivate debug mode."
)


class BaseCommand(click.core.Command):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.params.insert(0, ENDPOINT_OPTION)
        self.params.insert(1, ACCESS_TOKEN_OPTION)
        self.params.insert(2, VERIFY_SSL_OPTION)
        self.params.insert(3, CA_FILE)
        self.params.insert(4, DEBUG_OPTION)
