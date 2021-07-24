FROM ubuntu:20.04

EXPOSE 8000

ENV DEBIAN_FRONTEND noninteractive

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && \
    apt-get install -y sudo vim curl wget less lsof zip unzip default-mysql-client

RUN curl -s "https://get.sdkman.io" | bash
RUN source "$HOME/.sdkman/bin/sdkman-init.sh" && \
    sdk install java 16.0.1.9.1-amzn && \
    sdk install gradle 7.1.1

WORKDIR /usr/src/yawa

COPY . .