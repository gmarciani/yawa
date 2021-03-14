'use strict'

const winston = require('winston')

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: 'app.log' })
    ],
    exitOnError: false
})

logger.stream = {
    write: function(message){
        logger.info(message)
    }
}

module.exports = logger