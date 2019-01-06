const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    nome: {type: String, required: true },
    senha: {type: String, required: true },
    usuario: {type: String, required: true },
    casa: {type: String, required: true }
})

var model = mongoose.model('usuarios', Schema)
module.exports = {model}
