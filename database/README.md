# YAWA - Database

![YAWA Logo](resources/brand/yawa-logo.png)

You can connect to the database using PhpMyAdmin or MySQL client.

#### Credentials
* username: dbuser
* password: dbpassword

### PhpMyAdmin
You can connect to the database using PhpMyAdmin.
1. Go to http://localhost:8003
2. Connect to server: database
3. Loging with the database credentials

### MySQL client
From host:
```shell
mysql -h 127.0.0.1 -P 3307 -u dbuser -p --ssl-mode=DISABLED
```

From database container:
```shell
mysql -h 127.0.0.1 -P 3306 -u dbuser -p
```

From server container:
```shell
mysql -h database -P 3306 -u dbuser -p --ssl-mode=DISABLED
```
