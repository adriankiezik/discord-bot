const Character = require('../../models/character.model');
const sendConsole = require('../../functions/send-console');

const setDescription = (message, parsedMessage) => {
    let description = ''
    parsedMessage.arguments.map(word => {
        description += word + ' ';
    })
    if(description.length > 200) {
        message.channel.send('Description cannot be longer than 200 characters.')
    } else if(description.length < 2) {
        message.channel.send('Description cannot be empty.')
    } else {
        Character.findOneAndUpdate({ ownerID: parsedMessage.message.author.id }, {$set: {description: description }}, { new: true }, (err, res) => {
            if(err) { sendConsole('err', err) }

            if(!res) {
                message.channel.send('You must have character to use this command!')
            } else {
                message.channel.send('Description has been updated successfully.')
            }
        })
    }
}

module.exports = setDescription;