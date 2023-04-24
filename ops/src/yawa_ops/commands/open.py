import json

import click
import yawac
from yawac.apis.tags.get_random_outcome_api import GetRandomOutcomeApi

from yawa_ops.config.client_config import build_client_config
from yawa_ops.utils import logutils

log = logutils.get_logger(__name__)


@click.command(help="Request a random outcome.")
def get_random_outcome():
    log.info("Requesting a random outcome")

    with yawac.ApiClient(build_client_config()) as api_client:
        try:
            api_response = GetRandomOutcomeApi(api_client).get_random_outcome()
            print(json.dumps(api_response.body, indent=2))
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
