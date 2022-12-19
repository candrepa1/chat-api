const { findAllParticipants, createParticipant, findParticipant, removeParticipant } = require("./participants.controller");

const getParticipants = async (req, res) => {
    const {conversation_id} = req.params;

    try {
        const participants = await findAllParticipants(conversation_id);

        res.status(200).json(participants);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getParticipant = async (req, res) => {
    const {participant_id} = req.params;
    try {
        const participant = await findParticipant(participant_id);

        res.status(200).json(participant)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const postParticipant = async (req, res) => {
    const {conversation_id} = req.params;
    const {userId} = req.body;
    try {
        await createParticipant({conversationId: conversation_id, userId})

        res.status(200).json({message: 'Participant created successfully'})
    } catch (error) {
        res.status(400).json({message: 'Could not create participant', expectedFields: {
            userId: 'string'
        }})
    }
}

const deleteParticipant = async (req, res) => {
    const {participant_id} = req.params;
    try {
        await removeParticipant(participant_id);

        res.status(200).json({message: 'Participant has been deleted successfully'})
    } catch (error) {
        res.status(400).json({message: 'Could not delete participant'})
    }
}

module.exports = {
    getParticipants, 
    getParticipant,
    postParticipant, 
    deleteParticipant
}