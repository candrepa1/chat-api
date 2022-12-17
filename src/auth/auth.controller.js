const {findUserByEmail} = require('../users/users.controller');
const { isPasswordCorrect } = require('../utils/crypt');

const checkUserCredentials = async ({email, password: textPassword}) => {
    const user = await findUserByEmail(email);

    if(isPasswordCorrect(textPassword, user.password)) {
        return user
    } else {
        return null;
    }
}

module.exports = checkUserCredentials