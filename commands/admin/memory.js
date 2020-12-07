const { isAdmin } = require('../../utils.js');
const sendConsole = require('../../functions/send-console.js');

function memory(message) {
    if (isAdmin(message) == true) {
        message.reply("Approximate memory usage has been printed to console.")
        sendConsole('info', `Server uses approximately ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`)
    } else {
        message.reply("You're not administrator!")
    }
}

module.exports = memory