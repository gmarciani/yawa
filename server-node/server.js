'use strict'

const https = require('https');
const express = require('express')
const cors = require('cors')
const figlet = require('figlet')
const path = require('path')

const config = require('./common/config')
const logger = require('./common/logger')
const database = require('./data/database')
const security = require('./common/security')
const request = require('./middlewares/request')
const requestLogger = require('./middlewares/requestLogger')

// Server states
let server
let serverStarted = false
let serverClosing = false

// Error handling
function unhandledError (err) {
  logger.error(err)

  if (serverClosing) {
    return
  }

  serverClosing = true

  if (serverStarted) {
    server.close(function () {
      process.exit(1)
    })
  }
}

process.on('uncaughtException', unhandledError)
process.on('unhandledRejection', unhandledError)

// Middlewares
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(request)
app.use(requestLogger(logger.stream))

// Routes
require('./routes/index.routes')(app)
require('./routes/users.routes')(app)

// Database
database.initialize(config.database)

// Server start
server = https.createServer({
  key: security.ssl.privateKey,
  cert: security.ssl.certificate
}, app).listen(config.port, config.host, function (err) {
  if (err) {
    logger.error(err)
  }

  if (serverClosing) {
    logger.error('Server was closed before it could start')
  }

  serverStarted = true

  const addr = server.address()
  console.log(figlet.textSync('YAWA', { font: 'ANSI Regular' }))
  console.log(`Running on: ${config.host}:${addr.port}`)
})