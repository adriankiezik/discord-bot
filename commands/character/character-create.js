const chalk = require('chalk')
const sendConsole = require('../../functions/send-console')
const Character = require('../../models/character.model')
const characterCreate = (message, parsedMessage) => {
    Character.findOne({ ownerID: parsedMessage.message.author.id }, (err, res) => {
        if(err) { throw err }
        if(res) {
            message.channel.send("You already have a character! Wanna delete character? !delete-character. this command don't exist btw")
        } else {
            Character.create({
                ownerID: parsedMessage.message.author.id,
                name: parsedMessage.message.author.username
            }, err => {
                if(err) {sendConsole('err', err)}
                message.channel.send(`Character named ${parsedMessage.message.author.username} has been created!`)
                sendConsole('info', `Character named ${chalk.underline(parsedMessage.message.author.username)} has been created!`)
            })
        }
    })
}

module.exports = characterCreate;