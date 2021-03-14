FROM node

EXPOSE 8000

RUN apt-get update
RUN apt-get install -y vim less lsof mysql-client

WORKDIR /yawa/server

COPY . .

RUN npm install

ENTRYPOINT npm run dev & /bin/bash