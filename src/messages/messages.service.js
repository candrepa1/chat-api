const { createMessage, findAllMessages, findMessage, removeMessage } = require("./messages.controller")

const getMessages = async (req, res) => {
    const {conversation_id} = req.params;
    try {
        const messages = await findAllMessages(conversation_id);

        res.status(200).json(messages);
    } catch(error) {
        res.status(400).json({message: error.message})
    } 
}

const getMessage = async (req, res) => {
    const {message_id} = req.params;
    try {
        const message = await findMessage(message_id);

        res.status(200).json(message)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const postMessage = async (req, res) => {
    const {conversation_id} = req.params;
    const {message} = req.body;
    const {id} = req.user;
    try {
        const messageCreated = await createMessage({conversationId: conversation_id, userId: id, message})

        res.status(200).json(messageCreated)
    } catch (error) {
        res.status(400).json({})
    }
}

const deleteMessage = async (req, res) => {
    const {message_id} = req.params;

    try {
        const random = await removeMessage(message_id);

        res.status(200).json({message: 'Message successfully deleted'})
    } catch (error) {
        res.status(400).json({message: 'Could not remove message'})
    }
}

module.exports = {
    postMessage, 
    getMessages, 
    getMessage, 
    deleteMessage
}