const chalk = require('chalk')
const sendConsole = require('../../functions/send-console')
const Character = require('../../models/character.model')
const { capitalizeFirstLetter } = require('../../utils.js')

const characterCreate = (message, parsedMessage) => {
    Character.findOne({ ownerID: parsedMessage.message.author.id }, (err, res) => {
        if (err) { sendConsole('err', err) }
        if (res) {
            message.channel.send("You already have a character! Wanna delete character? !delete-character. this command don't exist btw")
        } else {
            if (!parsedMessage.arguments[0]) {
                message.channel.send("**Correct usage:** !create-character [warrior/mage/archer]")
            } else {
                handleClass(message, parsedMessage)
            }
        }
    })
}

const handleClass = (message, parsedMessage) => {
    switch (parsedMessage.arguments[0].toLowerCase()) {
        case "warrior":
            handleCreate(message, parsedMessage)
            break
        case "mage":
            handleCreate(message, parsedMessage)
            break
        case "archer":
            handleCreate(message, parsedMessage)
            break
        default:
            message.channel.send("**Correct usage:** !create-character [warrior/mage/archer]")
    }
}

const handleCreate = (message, parsedMessage) => {
    Character.create({
        ownerID: parsedMessage.message.author.id,
        name: parsedMessage.message.author.username,
        description: "I'm too lazy to set my description.",
        class: capitalizeFirstLetter(parsedMessage.arguments[0].toLowerCase()),
        money: 0,
        level: 1
    }, err => {
        if (err) { sendConsole('err', err) }
        message.channel.send(`${capitalizeFirstLetter(parsedMessage.arguments[0].toLowerCase())} ${parsedMessage.message.author.username} has been created! Have fun playin!`)
        sendConsole('info', `Character named ${chalk.underline(parsedMessage.message.author.username)} has been created!`)
    })
}

module.exports = characterCreate;