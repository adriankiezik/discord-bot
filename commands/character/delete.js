const Character = require("../../models/character.model");

const sendConsole = require('../../functions/send-console')

const deleteCharacter = (message, parsedMessage) => {
    Character.findOne({ ownerID: parsedMessage.message.author.id }, (err, res) => {
        if(err) { sendConsole('err', err) }
        if(res) {
            message.channel.send(`${parsedMessage.message.author.username}, are you sure that you want to delete character? You can't restore it later.`).then((botMessage => {
                botMessage.react("❎")
                botMessage.react("✅")
                botMessage.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❎' || reaction.emoji.name == '✅'),
                { max: 1, time: 30000 }).then(collected => {
                    if(collected.first().emoji.name == "❎") {
                        botMessage.delete().catch(err => { return })
                        message.delete().catch(err => { return })
                        message.channel.send("Character deletion canceled.")
                    } else if (collected.first().emoji.name == "✅") {
                        Character.findOneAndDelete({ ownerID: message.author.id }, (err, res) => {
                            if (err) { sendConsole('err', err) }
                            botMessage.delete().catch(err => { return })
                            message.delete().catch(err => { return })
                            if(!res) {
                                message.channel.send("Unexpected error. Couldn't delete character.")
                            } else {
                                message.channel.send("Character has been deleted.")
                            }
                        })
                    }
                })
            })).catch((err) => {
                return
            })
        } else {
            message.channel.send("You don't have character.")
        }
    })
}

module.exports = deleteCharacter;