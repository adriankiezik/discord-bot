const mongoose = require('mongoose');
const sendConsole = require('../functions/send-console')
require('dotenv').config();

const connectDB = callback => {
    mongoose.connect(process.env.dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

    const db = mongoose.connection;

    db.on('error', () => {
        sendConsole('error', "Couldn't connect to the database.")
    })

    db.once('open', () => {
        sendConsole('info', 'Succesfully set up connection with database.')
        callback()
    })
}

module.exports = connectDB;