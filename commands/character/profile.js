const Character = require('../../models/character.model');
const sendConsole = require('../../functions/send-console');
const convertCurrency = require('../../functions/convert-currency')

const profile = (message, parsedMessage) => {
    if (parsedMessage.arguments[0] == null) {
        Character.findOne({ ownerID: parsedMessage.message.author.id }, (err, res) => {
            if (err) { sendConsole('err', err) }

            if (!res) {
                message.channel.send('You must have character to use this command.')
            } else {
                sendMyProfile(res, message)
            }
        })
    } else {
        // kogos profil
        message.channel.send("You can't check someone profile now. I must code it someday :)")
    }
}

const sendMyProfile = (user, message) => {
    message.channel.send({
        embed: {
            color: 3447003,
            description:
                `
        **${user.name}** - **${user.class}**

        **Description**: ${user.description}

        **Level**: ${user.level}
        **Experience**: 0/100 exp
        **Money**: ${convertCurrency(user.money.toString())}

        **Professions:**
        - None

        nie zapomnij tych jebanych guzikow dodac
        // ja z przeszlosci kekw
        `
        }
    })
}

module.exports = profile;