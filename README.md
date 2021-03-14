# yawa
Yet Another Web Application

## Requirements
* mysql
```
brew install mysql
```

## Run
```
docker compose build
docker compose run [SERVICE_NAME]
docker compose up -d
```

## Connect to DB
From host:
```
mysql -h 127.0.0.1 -P 3306 -u dbuser -p
```

From server container:
```
mysql -h database -P 3306 -u dbuser -p
```