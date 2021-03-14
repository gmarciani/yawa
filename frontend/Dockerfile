FROM node

EXPOSE 3000

RUN apt-get update
RUN apt-get install -y vim lsof

WORKDIR /yawa/frontend

COPY . .

RUN npm install

ENTRYPOINT npm start & /bin/bash