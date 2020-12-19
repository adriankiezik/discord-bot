const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    ownerID: 'string',
    name: 'string',
    description: 'string',
    class: 'string',
    money: 'number',
    level: 'number'
})

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;