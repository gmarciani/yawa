FROM mysql:8.2.0

EXPOSE 3306

COPY init/ /docker-entrypoint-initdb.d/

RUN microdnf update
RUN microdnf install -y vim less lsof dnsutils
