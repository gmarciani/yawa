FROM node:18.16.0

EXPOSE 3000

ENV NVM_VERSION="0.39.3"
ENV NODE_VERSION="hydrogen"

WORKDIR /usr/src/yawa/frontend
COPY . .

RUN apt-get update
RUN apt-get install -y vim lsof

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash

RUN nvm install --lts=${NODE_VERSION}
RUN npm install --global npm
RUN npm install --global yarn

RUN yarn install

ENTRYPOINT yarn start & /bin/bash
