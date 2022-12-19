const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    }, 
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    profileImage: {
        type: DataTypes.STRING,
        defaultValue: null,
    }, 
    phone: {
        type: DataTypes.STRING(16),
        defaultValue: null,
    }
})

module.exports = Users;