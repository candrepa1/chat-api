const { Sequelize, DataTypes } = require("sequelize");

const Conversations = new Sequelize('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(30),
        defaultValue: 'New conversation'
    },
    image_url: {
        type: DataTypes.STRING
    }, 
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    }
})

module.exports = Conversations;