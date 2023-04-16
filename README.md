# YAWA

![YAWA Logo](resources/brand/yawa-logo.png)

## Requirements
Configure the local development environment

```shell
tools/setup-dev-environment.sh
```

## Containers

### Run
```shell
docker-compose up [--detach] [frontend|server|database|dbadmin|grafana|loki|prometheus]
```

### Login
```shell
docker exec -it [container-name] /bin/bash
```

## Database

### Connect to Database
From host:
```shell
mysql -h 127.0.0.1 -P 3307 -u dbuser -p --ssl-mode=DISABLED
```

From database container:
```shell
mysql -h 127.0.0.1 -P 3306 -u dbuser -p
```

From server container:
```shell
mysql -h database -P 3306 -u dbuser -p --ssl-mode=DISABLED
```

From PhpMyAdmin:
1. Go to `localhost:8003`
2. Login with the following credentials:
   1. Server: database
   2. Username: dbuser
   3. Password: dbpassword

## Server

### Connect to server
From host:
```shell
curl --request GET --url https://localhost:8002 --insecure
```

From server container:
```shell
curl --request GET --url https://localhost:8000 --insecure
```

### HTTPS
Create certificate
```shell
cd server/src/main/resources
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
Clients are built as part of the server build process.
```shell
cd server
gradle buildClients
```

### Bash
Examples:
```shell
export YAWA_ENDPOINT="https://localhost:8002" # Server running in Docker
export YAWA_ENDPOINT="https://localhost:8000" # Server running locally
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

## References
1. [Spring Boot Reference](https://docs.spring.io/spring-boot/docs/2.7.8/reference/html/)
1. [Spring Boot API Docs](https://docs.spring.io/spring-boot/docs/2.7.8/api/
2. [Spring Gradle Plugin](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/)
