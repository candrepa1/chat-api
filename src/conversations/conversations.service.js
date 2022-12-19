const { findConversationsForUser, createConversation, findConversation, removeConversation, updateConversation } = require("./conversations.controller")

const getConversationsForUser = async (req, res) => {
    const {id} = req.user;
    try {
        const conversations = await findConversationsForUser(id);

        res.status(200).json(conversations)
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

const getConversation = async (req, res) => {
    const {conversation_id} = req.params;
    const errorMessage = {message: 'Could not find a conversation with the given id'}
    try {
        const conversation = await findConversation(conversation_id);

        if(conversation) {
            res.status(200).json(conversation)
        } else {
            res.status(400).json(errorMessage)
        }
    } catch (error) {
        res.status(400).json(errorMessage)
    }
}

const postConversation = async (req, res) => {
    const {title, imageUrl, participantsIds} = req.body;
    const {id} = req.user;
    const errorMessage = {
        message: 'Unable to create a new conversation', expectedFields: {
            title: 'string', imageUrl: 'string', userId: 'string', participantsIds: 'array of strings'
        }
    }

    try {
        if(participantsIds) {
            const data = await createConversation({title, imageUrl, userId: id, participantsIds});

            res.status(200).json(data)
        } else {
            res.status(400).json(errorMessage)
        }
    } catch (error) {
        res.status(400).json(errorMessage)
    }
}

const deleteConversation = async (req, res) => {
    const {conversation_id} = req.params;
    try {
        await removeConversation(conversation_id)

        res.status(200).json({message: 'Conversation was deleted'})
    } catch (error) {
        res.status(400).json({message: 'Could not delete conversation'})
    }
}  

const patchConversation = async (req, res) => {
    const {conversation_id} = req.params;
    try {
        await updateConversation(conversation_id, req.body);

        res.status(200).json({message: 'Conversation updated sucessfully'})
    } catch(error) {
        res.status(400).json({message: 'Unable to update conversation'})
    }
}

module.exports = {
    getConversationsForUser,
    postConversation, 
    getConversation,
    deleteConversation, 
    patchConversation
}