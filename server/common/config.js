'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('yaml')
const logger = require('./logger')

const configFilePath = path.join(__dirname, '..', process.env.CONFIG_FILE)
logger.info(`Reading config file: ${configFilePath}`)

const config = yaml.parse(fs.readFileSync(configFilePath, 'utf8'))
logger.info(`Read config:\n${yaml.stringify(config)}`)
logger.info('Hello')

module.exports = config