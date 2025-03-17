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
make run

# Or a specific container
make run container=[frontend|server|database|dbadmin|grafana|loki|prometheus]
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

Trust the certification authority used for development:
1. Open Keychain
2. Open System Keychain
3. File > Import Items: select the PEM file of the CA chain (ca-chain.cert.pem)
4. Select the root CA: GMARCIANI Root CA > Get Info > Trust > Select Always Trust

Restart the browser to make the change take effect.

Trust the certification authority in Postman:
1. Open Postman
2. Postman > Settings > Certificates
3. Enable CA certificates
4. Select the PEM file of the CA chain (ca-chain.cert.pem)

## Troubleshooting

### Certificates

```
# Show server certificate
openssl s_client -showcerts -connect localhost:8010

# Validate the certificate with the CA bundle
openssl verify -verbose \
    -CAfile resources/certificates/ca-chain.cert.pem \
    resources/certificates/yawa.cert.pem
```

## References
1. [Spring Boot Reference](https://docs.spring.io/spring-boot/docs/2.7.8/reference/html/)
1. [Spring Boot API Docs](https://docs.spring.io/spring-boot/docs/2.7.8/api/)
1. [Spring Gradle Plugin](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/)
