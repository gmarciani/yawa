# YAWA - Server

![YAWA Logo](../resources/brand/yawa-logo.png)

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

### Certificates
Generate the certificates and keys using the project [gmarciani-ca](https://github.com/gmarciani/gmarciani-ca).
1. Put the P12 file `server/private/yawa.p12` in `server/src/main/resources/secrets/certificates/yawa.p12`
2. Put the CA chain of the intermediate CA in `ops/resources/certificates/ca-chain.cert.pem`

Check the returned certificate from the server:
```
openssl s_client -connect localhost:8002 -CAfile $ROOT_CA_PEM
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
export YAWA_USERNAME="admin"
export YAWA_PASSWORD="password"
./yawac getGreetings
token=$(./yawac login username==$YAWA_USERNAME password==$YAWA_PASSWORD | jq -r '.accessToken')
./yawac getGreetings Authorization:"Bearer $token"
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

## Build

### Dependency Management

Generate a report with all the suggested dependencies updates:
```
gradle dependencyUpdates
```

## Run

### Locally

```
gradle bootRun \
  -Pprofile=local-h2
```
