const { getConversationsForUser, postConversation } = require('./conversations.service');
const passportJWT = require('../middlewares/auth.middleware')

const router = require('express').Router();

router.route('/').get(passportJWT.authenticate('jwt', {session: false}), getConversationsForUser);
router.post('/', postConversation);

module.exports = router;