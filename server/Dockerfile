FROM ubuntu:20.04

EXPOSE 8000

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get install -y sudo vim curl wget less lsof default-mysql-client npm nodejs

#RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
#RUN source ~/.bashrc
#RUN nvm install 16.1.0
#RUN nvm use 16.1.0

WORKDIR /yawa/server

COPY . .

RUN npm install

CMD npm run start