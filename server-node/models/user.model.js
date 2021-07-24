'use strict'

const { DataTypes } = require('sequelize')

const config = require('../common/config')
const database = require('../data/database')

const sequelize = database.initialize(config.database)

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