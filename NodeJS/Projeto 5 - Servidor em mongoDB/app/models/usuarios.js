const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    nome: String,
    senha: String,
    usuario: String,
    casa: String
})

var model = mongoose.model('usuarios', Schema)
module.exports = {model}
