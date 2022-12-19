const { getConversationsForUser, postConversation, getConversation, deleteConversation, patchConversation } = require('./conversations.service');
const passportJWT = require('../middlewares/auth.middleware');
const { postMessage, getMessages, getMessage, deleteMessage } = require('../messages/messages.service');
const { getParticipants, postParticipant, getParticipant, deleteParticipant } = require('../participants/participants.service');

const router = require('express').Router();

router.route('/')
    .get(passportJWT.authenticate('jwt', {session: false}), getConversationsForUser)
    .post(passportJWT.authenticate('jwt', {session: false}), postConversation);

router.route('/:conversation_id')
    .get(passportJWT.authenticate('jwt', {session: false}), getConversation)
    .delete(passportJWT.authenticate('jwt', {session: false}), deleteConversation)
    .patch(passportJWT.authenticate('jwt', {session: false}), patchConversation);

router.route('/:conversation_id/messages')
    .get(passportJWT.authenticate('jwt', {session: false}), getMessages)
    .post(passportJWT.authenticate('jwt', {session: false}), postMessage);

router.route('/:conversation_id/messages/:message_id')
    .get(passportJWT.authenticate('jwt', {session: false}), getMessage)
    .delete(passportJWT.authenticate('jwt', {session: false}), deleteMessage);

router.route('/:conversation_id/participants')
    .get(passportJWT.authenticate('jwt', {session: false}), getParticipants)
    .post(passportJWT.authenticate('jwt', {session: false}), postParticipant);

router.route('/:conversation_id/participants/:participant_id')
    .get(passportJWT.authenticate('jwt', {session: false}), getParticipant)
    .delete(passportJWT.authenticate('jwt', {session: false}), deleteParticipant)

module.exports = router;