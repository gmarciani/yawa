# YAWA

![YAWA Logo](resources/brand/yawa-logo.png)

## Requirements
* Configure the local development environment

```shell
make setup
```

* Start Docker
## Quick Start

Build containers
```shell
make build

# Or a specific container
make build container=[frontend|server|database|dbadmin|grafana|loki|prometheus]
```

Run containers
```shell
make start

# Or a specific container
make start container=[frontend|server|database|dbadmin|grafana|loki|prometheus]
```

Restart containers
```shell
make restart

# Or a specific container
make restart container=[frontend|server|database|dbadmin|grafana|loki|prometheus]
```

Describe containers
```shell
make describe
```

Login to a container
```shell
make login container=[frontend|server|database|dbadmin|grafana|loki|prometheus]
```

Cleanup everything (containers, images, volumes)
```shell
make clean
```

Open web interfaces on browser:
```shell
make open target=[frontend|server|server_swagger|database|dbadmin|grafana|loki|prometheus]
```

Build yawa-ops (the server must be running to update the OpenAPI spec used by the Python client)
```shell
make build_ops
```

Build OpenAPI spec
```shell
make build_openapi
```

## Containers
The application is made of the containers below.

| Name | Url | Documentation |
|-|-|-|
| frontend   | https://localhost:8010 | [README](frontend/README.md) |
| server     | https://localhost:8002 | [README](server/README.md) |
| database   | https://localhost:3307 | [README](database/README.md) |
| dbadmin    | https://localhost:8003 | [README](database/README.md) |
| grafana    | http://localhost:8005  | [README](grafana/README.md) |
| prometheus | http://localhost:8004  | [README](prometheus/README.md) |


## Certificates
Generate the certificates and keys using the project [gmarciani-ca](https://github.com/gmarciani/gmarciani-ca).

Trust the certification authority used for development:
1. Open Keychain
2. Open System Keychain
3. File > Import Items: select the PEM file of the CA chain (`intermediate-ca/certs/ca-chain.cert.pem`)
4. Select the root CA: GMARCIANI Root CA > Get Info > Trust > Select Always Trust

Restart the browser to make the change take effect.

Trust the certification authority in Postman:
1. Open Postman
2. Postman > Settings > Certificates
3. Enable CA certificates
4. Select the PEM file of the CA chain (ca-chain.cert.pem)

Configure the certificate for the server:
1. Put the P12 file `server/private/yawa.p12` in `server/src/main/resources/secrets/certificates/yawa.p12`

Configure the certificate for the frontend:
1. Put the certificate `server/certs/yawa.cert.pem` in `frontend/resources/certificates/yawa.cert.pem`
2. Put the key `server/private/yawa.key.pem` in `frontend/resources/certificates/yawa.key.pem`
3. Put the CA chain `intermediate-ca/certs/ca-chain.cert.pem` in `frontend/resources/certificates/ca-chain.cert.pem`

Configure the certificate for the ops tools:
1. Put the CA chain `intermediate-ca/certs/ca-chain.cert.pem` in `ops/resources/certificates/ca-chain.cert.pem`

## Troubleshooting

### Certificates

```
# Show server certificate
openssl s_client -showcerts -connect localhost:8010

# Validate the certificate with the CA bundle
openssl verify -verbose \
    -CAfile resources/certificates/ca-chain.cert.pem \
    resources/certificates/yawa.cert.pem

# Verify that a cert and a key match (the MD5 checksum must be equal)
openssl x509 -noout -modulus -in /Volumes/workplace/personal/yawa/frontend/resources/certificates/yawa.cert.pem | openssl md5
openssl rsa  -noout -modulus -in /Volumes/workplace/personal/yawa/frontend/resources/certificates/yawa.key.pem | openssl md5
```

## References
1. [Spring Boot Reference](https://docs.spring.io/spring-boot/docs/2.7.8/reference/html/)
1. [Spring Boot API Docs](https://docs.spring.io/spring-boot/docs/2.7.8/api/)
1. [Spring Gradle Plugin](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/)
