'use strict'

const morgan = require('morgan')

morgan.token('requestId', function getId (req) {
    return req.id
})

function requestLogger(stream) {
    const logFormat = ':requestId - :method :url HTTP/:http-version - :status :res[content-length] - :remote-addr :user-agent'
    return morgan(logFormat, { 'stream': stream })
}

module.exports = requestLogger