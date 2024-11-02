default: build

COMPOSE_FILE="docker-compose.yaml"

build:
	docker compose -f ${COMPOSE_FILE} pull $(container)
	docker compose -f ${COMPOSE_FILE} build $(container)
run:
	docker compose -f ${COMPOSE_FILE} up --detach $(container)
clean:
	docker compose -f ${COMPOSE_FILE} rm --force --stop --volumes
	docker rmi --force $$(docker compose -f ${COMPOSE_FILE} config --images) || true
	docker volume rm --force yawa_dbdata yawa_cachedata yawa_srvdata || true
describe:
	docker compose -f ${COMPOSE_FILE} ps
login:
	docker compose -f ${COMPOSE_FILE} exec -it $(container) /bin/bash
