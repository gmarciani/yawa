FROM grafana/promtail:2.3.0

EXPOSE 9080

USER root

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && \
    apt-get install -y sudo vim curl wget less lsof