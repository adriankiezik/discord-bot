const chalk = require('chalk');

function sendConsole(type, message) {
    switch(type) {
        case "info":
            console.log(chalk.white.bgGreen.bold(' INFO ') + chalk.white.bold(' ' + message))
            break
        case "warn":
            console.log(chalk.white.bgYellow.bold(' WARN ') + chalk.white.bold(' ' + message))
            break
        case "err":
            console.log(chalk.white.bgRed.bold(' ERR ') + chalk.white.bold(' ' + message))
            break
        default:
            null
    }
}

module.exports = sendConsole
