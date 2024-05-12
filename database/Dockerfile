FROM mysql:8.2.0

EXPOSE 3306

COPY init/ /docker-entrypoint-initdb.d/

# See https://stackoverflow.com/a/71265327/1265900
RUN rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2023

RUN microdnf update
RUN microdnf install -y vim less lsof dnsutils
