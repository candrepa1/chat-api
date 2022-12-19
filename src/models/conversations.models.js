const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Users = require('./users.models');

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(30),
        defaultValue: 'New conversation'
    },
    imageUrl: {
        type: DataTypes.STRING, 
        defaultValue: null,
    }, 
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    }
})

module.exports = Conversations;