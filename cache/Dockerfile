FROM ubuntu:20.04

EXPOSE 6379

USER root

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y sudo vim curl wget less lsof dnsutils gpg lsb-release

RUN curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

RUN echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

RUN apt-get update
RUN apt-get install -y redis

RUN mkdir -p /var/redis
RUN mkdir -p /var/redis/logs

COPY redis.conf /etc/redis/redis.conf

HEALTHCHECK --interval=2s --timeout=20s --retries=10 CMD redis-cli ping

CMD redis-server /etc/redis/redis.conf
