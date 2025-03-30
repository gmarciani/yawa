default: build

COMPOSE_FILE="docker-compose.yaml"

setup:
	bash tools/setup-dev-environment.sh
build:
	docker compose -f ${COMPOSE_FILE} pull $(container)
	docker compose -f ${COMPOSE_FILE} build $(container)
run:
	docker compose -f ${COMPOSE_FILE} up --detach $(container)
restart:
	docker compose -f ${COMPOSE_FILE} restart $(container)
clean:
	docker compose -f ${COMPOSE_FILE} rm --force --stop --volumes
	docker rmi --force $$(docker compose -f ${COMPOSE_FILE} config --images) || true
	docker volume rm --force yawa_dbdata yawa_cachedata yawa_srvdata || true
describe:
	docker compose -f ${COMPOSE_FILE} ps
login:
	docker compose -f ${COMPOSE_FILE} exec -it $(container) /bin/bash
check_server:
	PATH="$$(pyenv virtualenv-prefix yawa-ops-dev)/envs/yawa-ops-dev/bin:$$PATH" yawa-ops health --profile admin
build_ops: build_clients
	PATH="$$(pyenv virtualenv-prefix yawa-ops-dev)/envs/yawa-ops-dev/bin:$$PATH" pip install -e ops/
build_clients: build_openapi
	gradle -p server buildClients
	rm -rf frontend/src/app/modules/clients/yawa
	mkdir -p frontend/src/app/modules/clients/yawa
	cp -R server/build/generated/clients/typescript/* frontend/src/app/modules/clients/yawa/
build_openapi:
	gradle -p server getOpenApiDefinition
	@echo '[INFO] Check the OpenAPI definition at server/src/main/resources/openapi/definition.json'
open:
	@if [ $(target) == "frontend" ]; then\
		python3 -m webbrowser "https://localhost:8010" ;\
	elif [ $(target) == "server" ]; then\
    	python3 -m webbrowser "https://localhost:8002" ;\
	elif [ $(target) == "server_swagger" ]; then\
        	python3 -m webbrowser "https://localhost:8002/docs/swagger-ui/index.html" ;\
   	elif [ $(target) == "grafana" ]; then\
       	python3 -m webbrowser "http://localhost:8005" ;\
	elif [ $(target) == "prometheus" ]; then\
		python3 -m webbrowser "http://localhost:8004" ;\
	elif [ $(target) == "dbadmin" ]; then\
		python3 -m webbrowser "https://localhost:8003" ;\
	else \
		echo "Unknown target ${target}" ;\
	fi
