# YAWA - Cache

![YAWA Logo](resources/brand/yawa-logo.png)

The cache service is a Redis instance.
You can connect to the cache using the Redis client.

## Requirements
* Redis Client:
```
brew install redis
```

#### Credentials
* username: admin
* password: adminpass

### Redis client
From host:
```shell
redis-cli -h localhost -p 6380
AUTH admin adminpass
```

From cache container:
```shell
redis-cli -h localhost -p 6379
AUTH admin adminpass
```

From server container:
```shell
redis-cli -h cache -p 6380
AUTH admin adminpass
```
