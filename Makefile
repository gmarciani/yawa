default: build

COMPOSE_FILE="docker-compose.yaml"

docker-check:
	@if ! docker info >/dev/null 2>&1; then \
		echo "Docker daemon is not running. Starting Docker..."; \
		if [[ "$$OSTYPE" == "darwin"* ]]; then \
			open -a Docker; \
			echo "Waiting for Docker Desktop to start..."; \
			while ! docker info >/dev/null 2>&1; do sleep 2; done; \
		elif [[ "$$OSTYPE" == "linux-gnu"* ]]; then \
			sudo systemctl start docker; \
			while ! docker info >/dev/null 2>&1; do sleep 2; done; \
		else \
			echo "Unsupported OS. Please start Docker manually."; \
			exit 1; \
		fi; \
		echo "Docker daemon started successfully."; \
	fi

setup:
	bash tools/setup-dev-environment.sh
build: docker-check
	docker compose -f ${COMPOSE_FILE} pull $(container)
	docker compose -f ${COMPOSE_FILE} build $(container)
run: docker-check
	docker compose -f ${COMPOSE_FILE} up --detach $(container)
restart: docker-check
	docker compose -f ${COMPOSE_FILE} restart $(container)
stop: docker-check
	docker compose -f ${COMPOSE_FILE} stop $(container)
clean: docker-check
	@docker compose -f ${COMPOSE_FILE} rm --force --stop --volumes 2>/dev/null || true
	@images=$$(docker compose -f ${COMPOSE_FILE} config --images 2>/dev/null); \
	if [ -n "$$images" ]; then \
		docker rmi --force $$images 2>/dev/null || true; \
	fi
	@docker volume rm --force yawa_dbdata yawa_cachedata yawa_srvdata 2>/dev/null || true
describe: docker-check
	docker compose -f ${COMPOSE_FILE} ps
login: docker-check
	docker compose -f ${COMPOSE_FILE} exec -it $(container) /bin/bash
check_server:
	PATH="$$(pyenv virtualenv-prefix yawa-ops-dev)/envs/yawa-ops-dev/bin:$$PATH" yawa-ops health --profile admin
build_ops: build_openapi
	gradle -p server buildPythonClient
	PATH="$$(pyenv virtualenv-prefix yawa-ops-dev)/envs/yawa-ops-dev/bin:$$PATH" pip install -e ops/
build_frontend_client: build_openapi
	gradle -p server buildTypescriptClient
	rm -rf frontend/src/app/modules/clients/yawa
	mkdir -p frontend/src/app/modules/clients/yawa
	cp -R server/build/generated/clients/typescript/* frontend/src/app/modules/clients/yawa/
build_openapi:
	gradle -p server getOpenApiDefinition
	@echo '[INFO] Check the OpenAPI definition at server/src/main/resources/openapi/definition.json'
open-frontend:
	python3 -m webbrowser "https://localhost:8010"
open-server:
	python3 -m webbrowser "https://localhost:8002"
open-swagger:
	python3 -m webbrowser "https://localhost:8002/docs/swagger-ui/index.html"
open-grafana:
	python3 -m webbrowser "http://localhost:8005"
open-prometheus:
	python3 -m webbrowser "http://localhost:8004"
open-dbadmin:
	python3 -m webbrowser "http://localhost:8003"
