FROM grafana/grafana:8.5.22-ubuntu

EXPOSE 3000

USER root

ENV GRAFANA_ADMIN_PASSWORD "adminpass"

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && \
    apt-get install -y sudo vim curl wget less lsof

RUN grafana-cli admin reset-admin-password $GRAFANA_ADMIN_PASSWORD
