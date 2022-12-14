const { Sequelize, DataTypes } = require("sequelize");

const Messages = new Sequelize('messages', {
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