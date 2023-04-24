import click
import yawac
from yawac.apis.tags.get_random_outcome_api import GetRandomOutcomeApi
from yawa_ops.utils import logutils
from yawa_ops.utils.api import print_response, build_client

log = logutils.get_logger(__name__)


@click.command(help="Request a random outcome.")
def get_random_outcome():
    log.info("Requesting a random outcome")

    with build_client() as api_client:
        try:
            api_response = GetRandomOutcomeApi(api_client).get_random_outcome()
            print_response(api_response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
