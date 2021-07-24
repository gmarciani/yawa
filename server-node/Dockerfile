FROM ubuntu:20.04

EXPOSE 8000

ENV DEBIAN_FRONTEND noninteractive
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.1.0

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && \
    apt-get install -y sudo vim curl wget less lsof default-mysql-client npm

RUN mkdir -p $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN source $NVM_DIR/nvm.sh && \
    nvm install 16.1.0 && \
    nvm use 16.1.0

WORKDIR /usr/src/yawa

COPY . .

RUN npm install

CMD npm run dev