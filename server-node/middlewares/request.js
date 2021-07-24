'use strict'

const uuid = require('uuid')

function assignRequestId (req, res, next) {
    req.id = uuid.v4()
    next()
}

module.exports = assignRequestId