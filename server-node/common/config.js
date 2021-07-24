'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('yaml')
const logger = require('./logger')

const configFilePath = path.join(__dirname, '..', process.env.CONFIG_FILE)

let config
try {
    config = yaml.parse(fs.readFileSync(configFilePath, 'utf8'))
    logger.info(`Read config file: ${configFilePath}`)
} catch (error) {
    logger.error(`INIT: Cannot read configuration file ${configFilePath}:`, error)
}

module.exports = config