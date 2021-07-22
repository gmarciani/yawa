'use strict'

const https = require('https');
const express = require('express')
const fs = require('fs')
const cors = require('cors')
const morgan = require('morgan')
const figlet = require('figlet')
const path = require('path')
const uuid = require('uuid')
const { Sequelize } = require('sequelize')

const config = require('./common/config')
const logger = require('./common/logger')

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

// Morgan
morgan.token('requestId', function getId (req) {
  return req.id
})

// Middlewares
function assignRequestId (req, res, next) {
  req.id = uuid.v4()
  next()
}

// Express App
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(assignRequestId)
app.use(morgan(':requestId - :method :url HTTP/:http-version - :status :res[content-length] - :remote-addr :user-agent', { 'stream': logger.stream }))

// Routes
require('./routes/index.routes')(app)
//require('./routes/users.routes')(app)

// Database Sync
/*const sequelize = new Sequelize('mysql://dbuser:dbpassword@localhost:3306/dbyawa', {
  logging: (msg) => logger.info('DB: ' + msg)
})

try {
  sequelize.authenticate()
  logger.info('INIT: DB connection succeeded')
} catch (error) {
  logger.error('INIT: DB connection failed:', error)
}
*/

// SSL
const privateKey = fs.readFileSync(path.join(__dirname, config.security.privateKey), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, config.security.certificate), 'utf8')

// Server start
server = https.createServer({
  key: privateKey,
  cert: certificate
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