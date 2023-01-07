# YAWA

![YAWA Logo](resources/brand/yawa-logo.png)

## Requirements

```shell
brew install docker docker-compose # Docker environment
brew install bash # Bash clients generated by OpenAPI require Bash >=5
brew install jq # Required by some of our scripts
brew install openapi-generator # OpenAPI generator
brew install bash-completion # Bash completion used by generated clients
brew install mysql # MySQL client
```

## Run
```shell
docker-compose up [--detach] [frontend|server|database|dbadmin|grafana|loki|prometheus]
```

## Login
```shell
docker exec -it [container-name] /bin/bash
```

## Connect to DB
From host:
```shell
mysql -h 127.0.0.1 -P 3307 -u dbuser -p
```

From database container:
```shell
mysql -h 127.0.0.1 -P 3306 -u dbuser -p
```

From server container:
```shell
mysql -h database -P 3306 -u dbuser -p --ssl-mode=DISABLED
```

## Connect to server
From host:
```shell
curl --request GET --url https://localhost:8001
```

From server container:
```shell
curl --request GET --url https://localhost:8000
```

## HTTPS
Create certificate
```shell
cd server/resources
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

Create certificate for Spring Server
```shell
keytool -genkey -alias yawa -keyalg rsa -keystore yawa.keystore \
  -validity 9999 -storetype pkcs12 \
  -dname "CN=localhost, O=Yawa, L=Cagliari, ST=Italy, C=IT" \
  -keypass yawapass -storepass yawapass
```

## Clients

### Bash
Examples:
```shell
export YAWA_ENDPOINT="https://localhost:8002"
export YAWA_USERNAME="mgiacomo"
export YAWA_PASSWORD="password"
./yawac getRandomOutcome
token=$(./yawac login username==$YAWA_USERNAME password==$YAWA_PASSWORD | jq -r '.token')
./yawac login getAuthenticatedHello Authorization:"Bearer $token"
```

### Python
Examples
```python
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
```


## Contribute
Before submitting your code, configure Pre-Commit in your local repo:

```shell
brew install pre-commit
pre-commit install
```
