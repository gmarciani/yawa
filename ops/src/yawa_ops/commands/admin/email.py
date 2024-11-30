import click
import yawac
from yawac.model.send_mail_request import SendMailRequest
from yawac.paths.admin_mail.post import SendMail

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils

from yawa_ops.utils.api import print_response, build_client
from yawa_ops.utils.cli_utils import string_to_dict

log = logutils.get_logger(__name__)

MAIL_TYPES = [
    str(t) for t in [
        SendMailRequest.MetaOapg.properties.mailType.USER_CREATION_PENDING,
        SendMailRequest.MetaOapg.properties.mailType.USER_CREATION_CONFIRMED,
        SendMailRequest.MetaOapg.properties.mailType.USER_DELETION_PENDING,
        SendMailRequest.MetaOapg.properties.mailType.USER_DELETION_CONFIRMED,
        SendMailRequest.MetaOapg.properties.mailType.PASSWORD_RESET_PENDING,
        SendMailRequest.MetaOapg.properties.mailType.PASSWORD_RESET_CONFIRMED
    ]
]


@click.command(help="Send an email.", cls=BaseCommand)
@click.pass_context
@click.option(
    "--mail-type",
    required=True,
    help="Mail type.",
    type=click.Choice(MAIL_TYPES, case_sensitive=False)
)
@click.option(
    "--attributes",
    required=False,
    help="Attributes to inject in the email template, as comma separated list of key=value pairs.",
)
def send_mail(ctx, endpoint, profile, verify_ssl, ca_file, debug, mail_type, attributes):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        request = SendMailRequest(mailType=mail_type, attributes=string_to_dict(attributes))
        return SendMail(api_client).send_mail(body=request)
