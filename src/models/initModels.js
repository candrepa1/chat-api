const Conversations = require("./conversations.models");
const Participants = require("./participants.models");
const Users = require('./users.models');
const Messages = require('./messages.models')

const initModels = () => {
    Users.hasMany(Participants);
    Participants.belongsTo(Users);

    Conversations.hasMany(Participants);
    Participants.belongsTo(Conversations);

    Users.hasMany(Messages);
    Messages.belongsTo(Users);

    Conversations.hasMany(Messages);
    Messages.belongsTo(Conversations);
}

module.exports = initModels;