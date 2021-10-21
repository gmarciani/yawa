# YAWA
Yet Another Web Application

## Requirements
* Docker Compose. See [installation guide](https://docs.docker.com/compose/install/)

* MySql
```
brew install mysql
```

* Pre-Commit
```
brew install pre-commit
pre-commit install
```

## Run
```
docker-compose up
```
```
docker-compose up [--detach] [frontend|server|database|dbadmin]
```

## Login
```
docker exec -it [container-name] /bin/bash
```

## Connect to DB
From host:
```
mysql -h 127.0.0.1 -P 3307 -u dbuser -p
```

From database container:
```
mysql -h 127.0.0.1 -P 3306 -u dbuser -p
```

From server container:
```
mysql -h database -P 3306 -u dbuser -p --ssl-mode=DISABLED
```

## Connect to server
From host:
```
curl --request GET --url https://localhost:8001
```

From server container:
```
curl --request GET --url https://localhost:8000
```

## HTTPS
Create certificate
```
cd server/resources
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

Create certificate for Spring Server
```
keytool -genkey -alias yawa -keyalg rsa -keystore yawa.keystore \
  -validity 9999 -storetype pkcs12 \
  -dname "CN=localhost, O=Yawa, L=Cagliari, ST=Italy, C=IT" \
  -keypass yawapass -storepass yawapass
```

## Clients

### Bash
Examples:
```
./client.sh -k --host https://localhost:8002 getRandomOutcome
```

```
./client.sh -k --host https://localhost:8002 getAuthenticatedHello Authorization:"Bearer YOUR_AUTH_TOKEN"
```

```
./client.sh -k --host https://localhost:8002 login username==YOUR_USERNAME password==YOUR_PASSWORD
```
