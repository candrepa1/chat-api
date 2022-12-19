const uuid = require('uuid');
const Conversations = require("../models/conversations.models");
const Participants = require('../models/participants.models');
const Users = require('../models/users.models');

const findConversationsForUser = async (id) => {
    const conversations = await Participants.findAll({
        where: {
            userId: id
        }, 
        include: [
            {
                model: Conversations
            }
        ]
    })

    return conversations;
}

const findConversation = async (id) => {
    const conversation = await Conversations.findOne({
        where: {
            id
        }, 
        include: [
            {
                model: Participants, 
                include: [
                    {
                        model: Users
                    }
                ]
            }
        ]
    })

    return conversation
}

const createConversation = async ({title, imageUrl, userId, participantsIds}) => {
    const conversation = await Conversations.create({
        id: uuid.v4(),
        title,
        imageUrl,
        userId
    })

    const participants = [];

    if (conversation.id) {
        for (const id of participantsIds) {
            const participant = await Participants.create({
                id: uuid.v4(),
                conversationId: conversation.id,
                userId: id
            })

            participants.push(participant);
        }
    }

    return {
        conversation, 
        participants
    }
}

const removeConversation = async (id) => {
    await Participants.destroy({
        where: {
            conversationId: id
        }
    });

    const conversation = await Conversations.destroy({
        where: {
            id
        }
    })

    return conversation;
}

const updateConversation = async (id, toUpdate) => {
    const conversation = await Conversations.update(toUpdate, {
        where: {
            id
        }
    })

    return conversation;
}

module.exports = {
    findConversationsForUser, 
    createConversation, 
    findConversation, 
    removeConversation, 
    updateConversation
}