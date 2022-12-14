const express = require('express');
const { api } = require('./utils/variables');

const app = express();

app.use(express.json())

app.listen(api.port, () => {
    console.log(`listening on port ${api.port}`)
})