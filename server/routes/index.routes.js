'use strict'

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.sendFile('index.html');
  })

  app.get('/hello', function (req, res) {
    res.send('hello, world!')
  })
}