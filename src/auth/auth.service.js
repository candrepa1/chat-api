const jwt = require('jsonwebtoken');
const checkUserCredentials = require("./auth.controller");
const {secret} = require('../utils/variables').jwt;

const login = async (req, res) => {
    try {
        const {id, email} = await checkUserCredentials(req.body);

        if(id && email) {
         const token = jwt.sign({
            id, 
            email
         }, secret)
     
         res.status(200).json({message: 'Valid credentials', token});
        } else {
         res.status(401).json({message: 'Invalid credentials'})
        }
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = login;