import json

import click
import yawac
from yawa_ops.config.client_config import build_client_config
from yawa_ops.utils import logutils
from yawac.apis.paths.get_authenticated_hello import GetAuthenticatedHello
from yawac.apis.paths.login import Login
from yawac.apis.paths.logout import Logout
from yawac.model.request import Request

log = logutils.get_logger(__name__)


@click.command(help="Login.")
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
def login(username, password):
    log.info("Logging in")

    with yawac.ApiClient(build_client_config()) as api_client:
        try:
            api_response = Login(api_client).post(body=Request(username=username, password=password))
            print(json.dumps(api_response.body, indent=2))
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Logout.")
def logout():
    log.info("Logging out")

    with yawac.ApiClient(build_client_config()) as api_client:
        try:
            api_response = Logout(api_client).post()
            print(json.dumps(api_response.body, indent=2))
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)


@click.command(help="Request to say hello to the authenticated user.")
def get_authenticated_hello():
    log.info("Requesting to say hello to the authenticated user")

    with yawac.ApiClient(build_client_config()) as api_client:
        try:
            api_response = GetAuthenticatedHello(api_client).get()
            print(json.dumps(api_response.body, indent=2))
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
