const Users = require("../models/users.models")
const uuid = require('uuid');
const { encryptPassword } = require("../utils/crypt");

const findAllUsers = async () => {
    const users = await Users.findAll();

    return users;
}

const findUser = async (id) => {
    const user = await Users.findOne({
        where: {
            id
        }
    });

    return user;
}

const findUserByEmail = async (email) => {
    const user = await Users.findOne({
        where: {
            email
        }
    })

    return user;
}

const createUser = async ({firstname, lastname, email, password, profileImage, phone}) => {
    const user = await Users.create({
        id: uuid.v4(),
        firstname,
        lastname,
        email,
        password: encryptPassword(password),
        profileImage,
        phone,
    });

    return user;
}

const removeUser = async (id) => {
    const user = await Users.destroy({
        where: {
            id
        }
    })

    return user;
}

const updateUser = async (id, toUpdate) => {
    const user = await Users.update(toUpdate, {
        where: {
            id
        }
    });

    return user;
}

module.exports = {
    createUser,
    findAllUsers,
    findUser,
    removeUser, 
    updateUser,
    findUserByEmail
}