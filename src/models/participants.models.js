const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Conversations = require("./conversations.models");
const Users = require("./users.models");

const Participants = db.define('participants', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    }, 
    conversation_id: {
        type: DataTypes.UUID, 
        allowNull: false,
        references: {
            key: 'id',
            model: Conversations,
        }
    }, 
    user_id: {
        type: DataTypes.UUID, 
        allowNull: false,
        references: {
            key: 'id',
            model: Users,
        }
    }
})

module.exports = Participants