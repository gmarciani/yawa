'use strict'

const users = require('../controllers/users.controller')

module.exports = function (app) {
  app.post('/users', users.create)
  app.get('/users', users.findAll)
  app.get('/users/:username', users.find)
  app.put('/users/:username', users.update)
  app.delete('/users/:username', users.delete)
}