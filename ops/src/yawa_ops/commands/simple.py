from pprint import pprint

import click
import yawac
from yawa_ops.config import constants
from yawa_ops.utils import logutils
from yawac.apis.tags import get_random_outcome_api

log = logutils.get_logger(__name__)


@click.command(help="Call API GET/RandomOutcome.")
def random_outcome():
    log.info("Calling API GET/RandomOutcome")

    configuration = yawac.Configuration(host=constants.ENDPOINT)
    configuration.verify_ssl = False
    configuration.debug = True

    with yawac.ApiClient(configuration) as api_client:
        # Create an instance of the API class
        api_instance = get_random_outcome_api.GetRandomOutcomeApi(api_client)

        try:
            api_response = api_instance.get_random_outcome()
            pprint(api_response.body)
        except yawac.ApiException as e:
            log.error("Exception when calling GetRandomOutcomeApi->get_random_outcome:\n%s" % e)
