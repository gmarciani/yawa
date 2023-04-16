# YAWA

![YAWA Logo](resources/brand/yawa-logo.png)

## Requirements
Configure the local development environment

```shell
tools/setup-dev-environment.sh
```

Start Docker

## Containers
The application is made of the containers below.

| Name | Url | Documentation |
|-|-|-|
| frontend   | https://localhost:8010 | [README](frontend/README.md) |
| server     | https://localhost:8002 | [README](server/README.md) |
| dbadmin    | https://localhost:3307 | [README](database/README.md) |
| dbadmin    | https://localhost:8002 | [README](database/README.md) |
| grafana    | http://localhost:8005  | [README](grafana/README.md) |
| prometheus | http://localhost:8004  | [README](prometheus/README.md) |

### Run
Run all containers
```shell
docker-compose up --detach
```

Run specific containers
```shell
docker-compose up --detach [frontend|server|database|dbadmin|grafana|loki|prometheus]
```

### Login
```shell
docker exec -it [container-name] /bin/bash
```

## Contribute
Before submitting your code, configure Pre-Commit in your local repo:

```shell
brew install pre-commit
pre-commit install
```

## References
1. [Spring Boot Reference](https://docs.spring.io/spring-boot/docs/2.7.8/reference/html/)
1. [Spring Boot API Docs](https://docs.spring.io/spring-boot/docs/2.7.8/api/)
1. [Spring Gradle Plugin](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/)
