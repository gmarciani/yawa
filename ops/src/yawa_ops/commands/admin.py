import click
import yawac
from yawac.model.send_mail_request import SendMailRequest
from yawac.paths.admin_send_mail.post import SendMail
from yawac.paths.manage_health.get import Health

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawac.paths.manage_info.get import Info
from yawac.paths.manage_shutdown.post import Shutdown

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Send an email.", cls=BaseCommand)
def send_mail(endpoint, access_token, verify_ssl, ca_file, debug):
    log.info("Sending an email")

    with build_client(endpoint=endpoint, access_token=access_token, verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            api_response = SendMail(api_client).send_mail(body=SendMailRequest(mailType="TEST_PLAIN"))
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
