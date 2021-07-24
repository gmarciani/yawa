# yawa
Yet Another Web Application

## Requirements
* mysql
```
brew install mysql
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