'use strict'

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const figlet = require('figlet')
const bodyParser = require('body-parser')
const path = require('path')
const { Sequelize } = require('sequelize')

const logger = require('./config/logger')

const opts = {
  host: 'localhost',
  port: process.env.SERVER_PORT || 8000
}

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

// Express App
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(bodyParser.json())
app.use(morgan('combined', { 'stream': logger.stream }));

// Routes
require('./routes/index.routes')(app)
require('./routes/users.routes')(app)

// Database Sync
const sequelize = new Sequelize('mysql://dbuser:dbpassword@localhost:3306/dbyawa', {
  logging: (msg) => logger.info('DB: ' + msg)
})

try {
  sequelize.authenticate()
  logger.info('INIT: DB connection succeeded')
} catch (error) {
  logger.error('INIT: DB connection failed:', error)
}

// Server start
server = app.listen(opts.port, opts.host, function (err) {
  if (err) {
    logger.error(err)
  }

  if (serverClosing) {
    logger.error('Server was closed before it could start')
  }

  serverStarted = true

  const addr = server.address()
  console.log(figlet.textSync('YAWA', { font: 'ANSI Regular' }))
  console.log(`Running on: ${opts.host || addr.host || 'localhost'}:${addr.port}`)
  console.log(`Log: ${path.resolve('app.log')}`)
})
