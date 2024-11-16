default: build

COMPOSE_FILE="docker-compose.yaml"

setup:
	bash tools/setup-dev-environment.sh
build:
	docker compose -f ${COMPOSE_FILE} pull $(container)
	docker compose -f ${COMPOSE_FILE} build $(container)
run: build
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
open:
	@if [ $(container) == "frontend" ]; then\
		python3 -m webbrowser "https://localhost:8010" ;\
	elif [ $(container) == "server" ]; then\
    	python3 -m webbrowser "https://localhost:8002" ;\
   	elif [ $(container) == "grafana" ]; then\
       	python3 -m webbrowser "http://localhost:8005" ;\
	elif [ $(container) == "prometheus" ]; then\
		python3 -m webbrowser "http://localhost:8004" ;\
	elif [ $(container) == "dbadmin" ]; then\
		python3 -m webbrowser "https://localhost:8003" ;\
	else \
		echo "Unknown container ${container}" ;\
	fi
