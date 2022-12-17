const uuid = require('uuid');
const Conversations = require("../models/conversations.models");
const Participants = require('../models/participants.models');
const Users = require('../models/users.models');

const findConversationsForUser = async (id) => {
    const conversations = await Participants.findAll({
        where: {
            user_id: id
        }, 
        include: [
            {
                model: Conversations,
                through: {
                    attributes: ['title', 'image_url']
                }
            }, 
        ]
    })

    return conversations;
}

const createConversation = async ({title, image_url, user_id, participantsIds}) => {
    const conversation = await Conversations.create({
        id: uuid.v4(),
        title,
        image_url,
        user_id
    })

    const participants = [];

    if (conversation.id) {
        for (const id of participantsIds) {
            const participant = await Participants.create({
                id: uuid.v4(),
                conversation_id: conversation.id,
                user_id: id
            })

            participants.push(participant);
        }
    }

    return {
        conversation, 
        participants
    }
}

module.exports = {
    findConversationsForUser, 
    createConversation
}