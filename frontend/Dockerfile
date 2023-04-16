FROM node:18.16.0

EXPOSE 3000

RUN apt-get update
RUN apt-get install -y vim lsof

WORKDIR /usr/src/yawa/frontend

COPY . .

RUN npm install

ENTRYPOINT npm start & /bin/bash
