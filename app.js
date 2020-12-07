const Discord = require('discord.js');
const chalk = require('chalk');
require('dotenv').config()

const parseMessage = require('./functions/parse-message.js');
const sendConsole = require('./functions/send-console.js');
const connectDB = require('./database/connect-db')

const Client = new Discord.Client();

Client.on('ready', () => {
    sendConsole('info', `Client started as ${chalk.underline(Client.user.tag)}`)
    Client.user.setActivity('Yumei#0001', { type: "LISTENING" })
    connectDB(() => {
        Client.on('message', async message => {
            parseMessage(message)
        })
    })
})

Client.login(process.env.token)

module.exports = Client