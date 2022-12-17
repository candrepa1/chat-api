const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const passport = require('passport')

const {secret} = require('../utils/variables').jwt
const {findUser} = require('../users/users.controller')

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: secret
}

passport.use(
    new JwtStrategy(options, (tokenDecoded, done) => {
        findUser(tokenDecoded.id)
            .then((user) => {
                if(user){
                    done(null, tokenDecoded)
                } else {
                    done(null, false)
                }
            })
            .catch((err) => {
                done(err, false)
            })
    })
)

module.exports = passport