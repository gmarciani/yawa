'use strict'

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.sendFile('index.html');
  })
}