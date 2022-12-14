const { Sequelize } = require('sequelize')
const { username, password, host, port, database } = require('./variables').db

const db = new Sequelize({
    dialect: 'postgres', 
    username, 
    password, 
    host, 
    port, 
    database,
})

module.exports = db;