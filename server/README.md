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

### Certificates
Create a Certificate Authority (CA) on KeyChain, following [this guide](https://support.apple.com/en-gb/guide/keychain-access/kyca2686/mac) enabling SAN extension.
Create a Certificate Signing Request (CSR), following [this guide](https://support.apple.com/en-gb/guide/keychain-access/kyca2793/mac).
Create the server certificate, by KeyChain > Certificate Assistant > Create a Certificate For Someone Else > Select the above CA and CSR.
Export the server certificate from KeyChain in P12 format.
Export the CA certificate from KeyChain in CER format.
Convert the CA certificate from CER to PEM format: `openssl x509 -inform der -in gmarciani-root-ca.cer -out gmarciani-root-ca.pem`
Check the content of the P12 keystore: `openssl pkcs12 -info -in yawa.p12 -nodes`
Check the returned certificate from the server: `openssl s_client -connect localhost:8002 -CAfile gmarciani-root-ca.pem`
Copy the CA certificate to the Ops module at `ops/src/yawa_ops/config/gmarciani-root-ca.pem` to make it trust the root CA

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
