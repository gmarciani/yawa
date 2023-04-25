# YAWA - Server

![YAWA Logo](resources/brand/yawa-logo.png)

You can contact the server to https://localhost:8002.

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

### Debugging
You can debug YAWA server from IntelliJ, as follows:
1. Launch YAWA with Docker
2. The debugger is listening on https://localhost:8006
3. Create a debugging configuration with the following settings:
   1. Type: Remote JVM Debug
   2. Name: YAWA
   3. Debugger Mode: Attach to remote JVM
   4. Host: localhost
   5. Port: 8006
   6. Command line arguments for remote JVM (JDK9 or later): -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:8006
   7. Use module classpath: server
4. Wait for the server to be up and running
5. Set your breakpoints
6. Start the debugger in IntelliJ
7. Send requests to the server
