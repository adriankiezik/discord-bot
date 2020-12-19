const parser = require("discord-command-parser");
const { prefix } = require("../config.js");

const memory = require("../commands/admin/memory.js");
const uptime = require('../commands/util/uptime.js');
const characterCreate = require('../commands/character/create');
const profile = require('../commands/character/profile');
const setDescription = require('../commands/character/set-description');
const deleteCharacter = require('../commands/character/delete')
const { isAdmin } = require('../utils');

function parseMessage(message) {
    const parsed = parser.parse(message, prefix)
    // ignore these three lines
    if (isAdmin(message)) {
        message.react('🍞')
    }

    if (!parsed.success) return

    switch(parsed.command) {
        case "memory":
            memory(message, parsed)
            break;
        case "uptime":
            uptime(message, parsed)
            break;
        case "create-character":
            characterCreate(message, parsed)
            break;
        case "profile":  
            profile(message, parsed)
            break;
        case "custom-background":
            customBackground(message, parsed)
            break;
        case "set-description":
            setDescription(message, parsed)
            break;
        case "delete-character":
            deleteCharacter(message, parsed)
            break
    }
}

module.exports = parseMessage