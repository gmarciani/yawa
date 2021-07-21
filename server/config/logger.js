'use strict'

const winston = require('winston')
require('winston-daily-rotate-file')

const customFormat = winston.format.printf((log) => {
    return `${new Date().toISOString()} ${log.level.toUpperCase()} - ${log.message}`
  }
)

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: customFormat,
    transports: [
        new winston.transports.DailyRotateFile({
            dirname: 'logs',
            filename: 'app.%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '15d'
        })
    ],
    exitOnError: false
})

logger.stream = {
    write: function(message){
        logger.info(message)
    }
}

module.exports = logger