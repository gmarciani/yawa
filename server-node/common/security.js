'use strict'

const fs = require('fs')
const path = require('path')

const config = require('./config')

module.exports.ssl = {
    privateKey: fs.readFileSync(path.join(__dirname, '..', config.security.privateKey), 'utf8'),
    certificate: fs.readFileSync(path.join(__dirname, '..', config.security.certificate), 'utf8')
}