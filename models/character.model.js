const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    ownerID: 'string',
    name: 'string'
})

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;