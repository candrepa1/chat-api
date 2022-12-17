const bcrypt = require('bcrypt')

const encryptPassword = (textPassword) => {
    const saltRounds = 10;

    return bcrypt.hashSync(textPassword, saltRounds)
}

const isPasswordCorrect = (textPassword, hash) => {
    return bcrypt.compareSync(textPassword, hash);
}

module.exports = {
    encryptPassword, 
    isPasswordCorrect
}