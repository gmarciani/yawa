import yawac
from pprint import pprint
from yawac.api import get_random_outcome_api
from yawac.api import login_api
from yawac.api import get_authenticated_hello_api
from yawac.model.request import Request

YAWA_ENDPOINT="https://localhost:8002"
YAWA_USERNAME="mgiacomo"
YAWA_PASSWORD="password"

configuration = yawac.Configuration(host=YAWA_ENDPOINT)
configuration.verify_ssl = False

with yawac.ApiClient(configuration) as client:
    try:
        # GetRandomOutcome
        api = get_random_outcome_api.GetRandomOutcomeApi(client)
        response = api.get_random_outcome()
        pprint(response)

        # Login
        api = login_api.LoginApi(client)
        request = Request(username=YAWA_USERNAME, password=YAWA_PASSWORD)
        response = api.login(request)
        pprint(response)

        client.set_default_header("Authorization", "Bearer " + response["token"])

        # GetAuthenticatedHello
        api = get_authenticated_hello_api.GetAuthenticatedHelloApi(client)
        response = api.get_authenticated_hello()
        pprint(response)
    except yawac.ApiException as e:
        print("Exception when calling API: %s\n" % e)
