const Participants = require("../models/participants.models")
const Users = require("../models/users.models")
const uuid = require('uuid')

const findAllParticipants = async (conversationId) => {
    const participants = await Participants.findAll({
        where: {
            conversationId
        }, 
        include: [
            {
                model: Users
            }
        ]
    })

    return participants
}

const findParticipant = async (id) => {
    const participant = await Participants.findOne({
        where: {
            id
        }, 
        include: [
            {
                model: Users
            }
        ]
    })

    return participant
}

const createParticipant = async ({conversationId, userId}) => {
    const participants = await Participants.create({
        id: uuid.v4(),
        conversationId,
        userId
    })

    return participants;
}

const removeParticipant = async (id) => {
    const participant = await Participants.destroy({
        where: {
            id
        }
    })

    return participant
}

module.exports = {
    findAllParticipants, 
    findParticipant,
    createParticipant, 
    removeParticipant
}