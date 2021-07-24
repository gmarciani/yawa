'use strict'

const { Sequelize } = require('sequelize')
const { ModuleFilenameHelpers } = require('webpack')
const logger = require('../common/logger')

module.exports.initialize = function (dbconfig) {
    const databaseUrl = `${dbconfig.protocol}://${dbconfig.user}:${dbconfig.password}@${dbconfig.host}:${dbconfig.port}/${dbconfig.name}`
    const sequelize = new Sequelize(databaseUrl, {
        logging: (msg) => logger.info('DB: ' + msg)
    })
    
    try {
        sequelize.authenticate()
        logger.info('INIT: DB connection succeeded')
    } catch (error) {
        logger.error('INIT: DB connection failed:', error)
    }

    return sequelize
}