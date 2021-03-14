'use strict'

const User = require('../models/user.model')

exports.create = (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }

  User.create(user)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot create User with username=${username}: ${err.message}`
    })
  })
}

exports.find = (req, res) => {
  const username = req.params.username

  User.findByPk(username)
    .then(data => {
      if (data != null) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `User not found: ${username}`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot retrieve User with username=${username}: ${err.message}`
      })
    })
}

exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot retrieve all Users: ${err.message}`
      })
    })
}

exports.update = (req, res) => {
  const username = req.params.username
  const updateRequest = req.body

  User.update(updateRequest, { where: { username: username }})
    .then(num => {
      if (num == 1) {
        res.send({
          message: `User updated with username=${username}`
        })
      } else {
        res.status(404).send({
          message: `Cannot update User with username=${username}: not found`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot update User with username=${username}: ${err.message}`
      })
    })
}

exports.delete = (req, res) => {
  const username = req.params.username

  User.destroy({ where: { username: username }})
    .then(num => {
      if (num == 1) {
        res.send({
          message: `User deleted with username=${username}`
        })
      } else {
        res.status(404).send({
          message: `Cannot delete User with username=${username}: not found`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot delete User with username=${username}: ${err.message}`
      })
    })
}