import click
import yawac
from yawac.model.send_mail_request import SendMailRequest
from yawac.paths.admin_send_mail.post import SendMail

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Send an email.", cls=BaseCommand)
@click.pass_context
def send_mail(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            request = SendMailRequest(mailType="TEST_PLAIN")
            response = SendMail(api_client).send_mail(body=request)
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
