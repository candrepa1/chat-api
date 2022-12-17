const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Conversations = require("./conversations.models");
const Users = require("./users.models");

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    }, 
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users,
        }
    }, 
    conversation_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id', 
            model: Conversations,
        }
    }, 
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Messages;