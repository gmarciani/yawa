import click
import yawac
from yawac.model.send_mail_request import SendMailRequest
from yawac.paths.admin_send_mail.post import SendMail

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.config.constants import TOKENS
from yawa_ops.utils import logutils

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Send an email.", cls=BaseCommand)
def send_mail(endpoint, identity, access_token, verify_ssl, ca_file, debug):
    log.info("Sending an email")

    with build_client(endpoint=endpoint, access_token=access_token or TOKENS[identity], verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            request = SendMailRequest(mailType="TEST_PLAIN")
            response = SendMail(api_client).send_mail(body=request)
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
