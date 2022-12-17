const express = require('express');
const { api } = require('./utils/variables');
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const conversationsRouter = require('./conversations/conversations.router')
const db = require('./utils/database');
const initModels = require('./models/initModels');

const app = express();

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch((err) => console.log(err))

initModels();

app.use(express.json())

app.use('/login', authRouter);
app.use('/users', userRouter);
app.use('/api/v1/conversations', conversationsRouter);

app.listen(api.port, () => {
    console.log(`listening on port ${api.port}`)
})