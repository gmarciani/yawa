'use strict'

const winston = require('winston')
require('winston-daily-rotate-file')

const logDir = process.env.LOG_DIR || 'logs'
const logLevel = process.env.LOG_LEVEL || 'info'

const customFormat = winston.format.printf((log) => {
    return `${new Date().toISOString()} ${log.level.toUpperCase()} - ${log.message}`
  }
)

const logger = winston.createLogger({ 
    level: logLevel,
    format: customFormat,
    transports: [
        new winston.transports.DailyRotateFile({
            dirname: logDir,
            filename: 'app.%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '15d'
        })
    ],
    exitOnError: false
})

// The stream is supposed to be used by Morgan.
// Morgan appends '\n' at the end of every log message,
// that must be removed.
logger.stream = {
    write: function(message){
        logger.info(message.replace(/\n+$/, ""))
    }
}

module.exports = logger