default: build

COMPOSE_FILE="docker-compose.yaml"

build:
	docker compose -f ${COMPOSE_FILE} pull
	docker compose -f ${COMPOSE_FILE} build
run:
	docker compose -f ${COMPOSE_FILE} up --detach
clean:
	docker compose -f ${COMPOSE_FILE} rm --force --stop --volumes
	docker rmi --force $$(docker compose -f ${COMPOSE_FILE} config --images) || true
	docker volume rm yawa_dbdata yawa_cachedata yawa_srvdata || true
