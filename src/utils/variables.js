require('dotenv').config();

module.exports = {
    api: {
        port: process.env.PORT
    }, 
    db: {
        username: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        host: process.env.DB_PORT,
        port: process.env.DB_PORT, 
        database: process.env.DB_NAME,
    }
}