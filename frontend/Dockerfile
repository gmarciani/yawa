FROM ubuntu:22.04

EXPOSE 3000

USER root

SHELL ["/bin/bash", "-lc"]

ENV NVM_DIR /usr/local/nvm
ENV NVM_VERSION 0.39.5
ENV NODE_VERSION 18.18.2

WORKDIR /usr/src/yawa/frontend
COPY . .

RUN apt-get update
RUN apt-get install -y vim curl lsof dnsutils

RUN mkdir -p $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v$NVM_VERSION/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install --global npm@latest \
    && npm install --global yarn

RUN yarn install \
    && yarn start &

ENTRYPOINT /bin/bash
