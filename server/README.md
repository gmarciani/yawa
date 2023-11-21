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
Create a Certificate Authority (CA) on KeyChain, following [this guide](https://support.apple.com/en-gb/guide/keychain-access/kyca2686/mac):
* Name: GMARCIANI Root CA
* Identity Type: Self-Signed Root CA
* User Certificate: SSL Server
* Email from: firstname.lastname+gmarciani-root-ca@gmail.com
* Let me override defaults: true
* Serial Number: 1
* Validity Period (days): 3650
* Sign your invitation: true
* Common Name: GMARCIANI Root CA
* Organizational Unit: GMARCIANI Certification Authority
* Country: IT
* Key Size (CA): 4098
* Algorithm (CA): RSA
* Key Size (Users): 4098
* Algorithm (Users): RSA
* Key Usage Extension (CA): Signature, Certificate Signing
* Key Usage Extension (Users): Signature, Key Encipherment
* Extended Key Usage Extension (CA): Any
* Extended Key Usage Extension (Users): SSL Server Authentication
* Basic Constraints Extensions (CA): Use this certificate as certificate authority
* Basic Constraints Extensions (Users): none
* SAN (CA): true
* SAN (Users): true
* Keychain: login
* Trust certificates signed by this CA: true

Create a Certificate Signing Request (CSR), following [this guide](https://support.apple.com/en-gb/guide/keychain-access/kyca2793/mac):
* User Email: firstname.lastname+yawa@gmail.com
* CA Email: firstname.lastname+gmarciani-root-ca@gmail.com
* Save to disk: true

Create the server certificate, by KeyChain > Certificate Assistant > Create a Certificate For Someone Else > Select the above CA and CSR.

Export the CA certificate and the server certificate as PEM from Keychain: `GMARCIANI-Root-CA.pem` and `YAWA.pem`.
Export the server CA and private key as a single P12 keystore from Keychain `YAWA.p12`, providing the password that will be in `server.key-store-password`.

Inspect the certificates and keystore:
```
openssl x509 -in GMARCIANI-Root-CA.pem -text
openssl x509 -in YAWA.pem -text
openssl pkcs12 -in YAWA.p12 -info -nodes -legacy
```

Verify the server certificate:
```
openssl verify -verbose -CAfile GMARCIANI-Root-CA.pem YAWA.pem
```

Copy the CA certificate to `server/src/main/yawa_ops/config/GMARCIANI-Root-CA.pem` to make the Ops module it trust the root CA.
Copy the CA certificate to `ops/src/yawa_ops/config/GMARCIANI-Root-CA.pem` to make the Ops module it trust the root CA.

Check the returned certificate from the server: `openssl s_client -connect localhost:8002 -CAfile gmarciani-root-ca.pem`

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
