FROM ubuntu:24.04

EXPOSE 3000

#USER root

SHELL ["/bin/bash", "-lc"]

ENV NVM_DIR /usr/local/nvm
ENV NVM_VERSION 0.40.2
ENV NODE_VERSION 20.19.0

WORKDIR /usr/src/yawa/frontend
COPY . .

RUN apt-get update
RUN apt-get install -y vim curl lsof dnsutils ca-certificates

RUN mkdir -p ${NVM_DIR}
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash \
    && . ${NVM_DIR}/nvm.sh \
    && nvm install ${NODE_VERSION} \
    && nvm alias default ${NODE_VERSION} \
    && nvm use default

ENV PATH ${NVM_DIR}/versions/node/v${NODE_VERSION}/bin:${PATH}

RUN node --version

RUN npm install --global npm@latest
RUN npm install --global yarn

RUN yarn install
CMD yarn run start
