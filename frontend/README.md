# YAWA - Frontend

![YAWA Logo](../resources/brand/yawa-logo.png)

You can contact the frontend to https://localhost:8010.

## Requirements
1. NVM >= 0.30.3
2. NodeJs >= 18.16.x LTS

```
nvm install --lts=hydrogen
npm install --global npm@latest
npm install --global yarn
npm install --global gulp-cli
```

## Development

### Assets
Assets are managed using tools in `tools` directory.
So, you need to run the below commands from within that directory.

Install dependencies:
```
yarn install
```

Build assets:
```
gulp compile [--prod]
```

Preview assets:
```
gulp localhost
```

Go to http://localhost:8080/public/home.html

### React App
Build the application:

```
yarn install
```

Start the application:
```
yarn start
```

Got to http://localhost:3000/


### Credits
This frontend is based on Metronic v8.1.8.


### References
1. https://preview.keenthemes.com/html/metronic/docs/
2. https://www.amcharts.com/
