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
@click.pass_context
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
def login(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug, username, password):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            request = LoginRequest(username=username, password=password)
            response = Login(api_client).post(body=request)
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Logout.", cls=BaseCommand)
@click.pass_context
def logout(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = Logout(api_client).post()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Request to say hello to the authenticated user.", cls=BaseCommand)
@click.pass_context
def get_authenticated_hello(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = GetAuthenticatedHello(api_client).get()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
