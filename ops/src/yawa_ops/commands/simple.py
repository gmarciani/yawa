import json
import re
from pprint import pprint

import click
import yawac
from yawa_ops.config import constants
from yawa_ops.utils import logutils
from yawac.apis.tags import get_random_outcome_api
from yawac.model.request import Request

log = logutils.get_logger(__name__)


@click.command(help="Call API GET/RandomOutcome.")
def random_outcome():
    log.info("Calling API GET/RandomOutcome")

    configuration = yawac.Configuration(host=constants.ENDPOINT)
    configuration.verify_ssl = False

    with yawac.ApiClient(configuration) as api_client:
        # Create an instance of the API class
        api_instance = get_random_outcome_api.GetRandomOutcomeApi(api_client)
        request = Request(
            username="username_example",
            password="password_example",
        )

        try:
            api_response = api_instance.get_random_outcome(request)
            pprint(api_response)
        except yawac.ApiException as e:
            print("Exception when calling GetRandomOutcomeApi->get_random_outcome: %s\n" % e)
