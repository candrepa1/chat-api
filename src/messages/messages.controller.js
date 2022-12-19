const uuid = require('uuid');
const Conversations = require('../models/conversations.models');
const Messages = require("../models/messages.models")

const findAllMessages = async (conversationId) => {
    const messages = await Messages.findAll({
        where: {
            conversationId
        }
    })

    return messages;
}

const findMessage = async (id) => {
    const message = await Messages.findOne({
        where: {
            id
        }
    })

    return message;
}

const createMessage = async ({conversationId, userId, message}) => {
    const createdMessage = await Messages.create({
        id: uuid.v4(), 
        userId, 
        conversationId, 
        message,
    })

    return createdMessage;
}

const removeMessage = async (id) => {
    const message = await Messages.destroy({
        where: {
            id
        }
    })

    return message;
}

module.exports = {
    findAllMessages, 
    findMessage,
    createMessage, 
    removeMessage
}