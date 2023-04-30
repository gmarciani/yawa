FROM redis:7.0.11

EXPOSE 6379

RUN apt-get update
RUN apt-get install -y vim less lsof

COPY redis.conf /usr/local/etc/redis/redis.conf

CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
