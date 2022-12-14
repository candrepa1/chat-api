const { Sequelize, DataTypes } = require("sequelize");

const Participants = new Sequelize('participants', {
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