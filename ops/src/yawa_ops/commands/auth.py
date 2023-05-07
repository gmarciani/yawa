import click
import yawac

from yawa_ops.commands.base_command import BaseCommand
from yawa_ops.utils import logutils
from yawac.apis.paths.get_authenticated_hello import GetAuthenticatedHello
from yawac.apis.paths.login import Login
from yawac.apis.paths.logout import Logout
from yawac.model.login_request import LoginRequest

from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Login.", cls=BaseCommand)
@click.option(
    "--username",
    required=True,
    help="Username.",
)
@click.option(
    "--password",
    required=True,
    help="Password.",
)
def login(endpoint, access_token, verify_ssl, ca_file, debug, username, password):
    log.info("Logging in")

    with build_client(endpoint=endpoint, access_token=access_token, verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            api_response = Login(api_client).post(body=LoginRequest(username=username, password=password))
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Logout.", cls=BaseCommand)
def logout(endpoint, access_token, verify_ssl, ca_file, debug):
    log.info("Logging out")

    with build_client(endpoint=endpoint, access_token=access_token, verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            api_response = Logout(api_client).post()
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Request to say hello to the authenticated user.", cls=BaseCommand)
def get_authenticated_hello(endpoint, access_token, verify_ssl, ca_file, debug):
    log.info("Requesting to say hello to the authenticated user")

    with build_client(endpoint=endpoint, access_token=access_token, verify_ssl=verify_ssl, ca_file=ca_file, debug=debug) as api_client:
        try:
            api_response = GetAuthenticatedHello(api_client).get()
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
