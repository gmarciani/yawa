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
* Common Name: GMARCIANI Root CA
* Identity Type: Self-Signed Root CA
* User Certificate: SSL Server
* Email from: giacomo.marciani+gmarciani-root-ca@gmail.com
* Let me override defaults: true
* Serial Number: 1
* Validity Period (days): 3650
* Sign your invitation: true
* Common Name: GMARCIANI Root CA
* Organization Name: GMARCIANI CORP
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

* Let me override defaults: true
* Serial Number: 1
* Validity Period (days): 3650
* Common Name: YAWA
* Organization: YAWA Corp
* Organizational Unit: Security
* City: Cagliari
* State/Province: CA
* Country: IT
* Extension: All
* Capabilities: All
* Subject Alternative Names
  * rfc822Name: giacomo.marciani+yawa@gmail.com
  * dnsName: localhost

Export the CA certificate and the server certificate as separated PEM files from Keychain: `GMARCIANI-Root-CA.pem` and `YAWA.pem`.
Export the server certificate and the private key as a single P12 keystore from Keychain `YAWA.p12`,
providing the password that will be in `server.key-store-password`.

```
# rbaServerCertReq.config
[req]
req_extensions = v3_req
distinguished_name = dn
prompt = no

[dn]
CN = yawa.com
C = IT
L = Cagliari
O = YAWA CORP
OU = Security

[v3_req]
subjectAltName = DNS:localhost
```


```
# v3.ext
subjectAltName = DNS:localhost
```

```
openssl genrsa -out rootCAKey.pem 2048
openssl req -x509 -sha256 -new -nodes -key rootCAKey.pem -days 3650 -out rootCACert.pem
openssl genrsa -out rbaServerKey.pem 2048
openssl req -new -key rbaServerKey.pem -sha256 -out rbaServerCert.csr -config rbaServerCertReq.config
openssl x509 -req -sha256 -in rbaServerCert.csr -CA rootCACert.pem -CAkey rootCAKey.pem -CAcreateserial -out rbaServerCert.pem -days 3650 -extfile v3.ext
openssl pkcs12 -export -out rbaServer.p12 -inkey rbaServerKey.pem -in rbaServerCert.pem -name "YAWA"
```


Inspect the certificates and keystore:
```
ROOT_CA_PEM="server/src/main/resources/secrets/certificates/GMARCIANI-Root-CA.pem"
SERVER_CERT_PEM="server/src/main/resources/secrets/certificates/YAWA.pem"
SERVER_CERT_P12="server/src/main/resources/secrets/certificates/YAWA.p12"

openssl x509 -in $ROOT_CA_PEM -text
openssl x509 -in $SERVER_CERT_PEM -text
openssl pkcs12 -in $SERVER_CERT_P12 -info -nodes -legacy
```

Verify the server certificate:
```
openssl verify -verbose -CAfile $ROOT_CA_PEM $SERVER_CERT_PEM
```

Copy the CA certificate to the Ops module to make it trust the root CA.
```
cp $ROOT_CA_PEM ops/resources/certificates/
```

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
