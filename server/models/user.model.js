'use strict'

const { Sequelize, DataTypes } = require('sequelize')
const logger = require('../config/logger')
const sequelize = new Sequelize('mysql://dbuser:dbpassword@localhost:3306/dbyawa', {
    logging: (msg) => logger.info('DB: ' + msg)
})

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users'
})

User.sync()

module.exports = User