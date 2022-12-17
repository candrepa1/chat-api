const { findConversationsForUser, createConversation } = require("./conversations.controller")

const getConversationsForUser = async (req, res) => {
    const {id} = req.user;
    try {
        const conversations = await findConversationsForUser(id);

        res.status(200).json(conversations)
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

const postConversation = async (req, res) => {
    const {title, image_url, user_id, participantsIds} = req.body;

    console.log(title, image_url, user_id, participantsIds, 'body!')

    try {
        const data = await createConversation({title, image_url, user_id, participantsIds});

        res.status(200).json(data)
    } catch (error) {
        console.log(error, 'error!')
        res.status(400).json({
            message: 'Unable to create a new conversation', expectedFields: {
                title: 'string', image_url: 'string', user_id: 'string', participantsIds: 'array of strings'
            }
        })
    }
}

module.exports = {
    getConversationsForUser,
    postConversation
}