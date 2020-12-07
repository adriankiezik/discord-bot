const { secondsToDhms } = require('../../utils.js');

function uptime(message) {
    message.reply(`Bot has been running from ${secondsToDhms(process.uptime())}`)
}

module.exports = uptime