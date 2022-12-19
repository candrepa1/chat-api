const { createUser, findAllUsers, removeUser, updateUser, findUser } = require("./users.controller")

const getUsers = async (req, res) => {
    try {
        const users = await findAllUsers();

        res.status(200).json(users)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const getUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await findUser(id);

        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const postUser = async (req, res) => {
    try {
        const user = await createUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({expectedFields: {
            firstname: 'string',
            lastname: 'string',
            email: 'string',
            password: 'string',
            profileImage: 'string',
            phone: 'string'
        }})
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await removeUser(id);

        res.status(200).json({message: 'User removed sucessfully'})
    } catch(error) {
        res.status(400).json({message: 'User could not be removed'})
    }
}

const patchUser = async (req, res) => {
    const {id} = req.params;
    try {
        await updateUser(id, req.body);

        res.status(200).json({message: 'User updated sucessfully'})
    } catch(error) {
        res.status(400).json({message: 'User could not be updated'})
    } 
}

module.exports = {
    postUser, 
    getUser,
    getUsers,
    deleteUser,
    patchUser
}