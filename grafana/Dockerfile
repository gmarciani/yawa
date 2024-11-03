FROM grafana/grafana:11.3.0-ubuntu

EXPOSE 3000

USER root

SHELL ["/bin/bash", "-lc"]

ENV GRAFANA_ADMIN_PASSWORD "adminpass"

RUN apt-get update
RUN apt-get install -y sudo vim curl wget less lsof

RUN grafana-cli admin reset-admin-password $GRAFANA_ADMIN_PASSWORD
