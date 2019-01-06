const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    usuario: { type: String, required: true },
    casa: { type: String, required: true },


}, { versionKey: false })

var model = mongoose.model('usuarios', Schema)


function inserir(dados) {

    return model.create(dados, () => {

    })

}

//module.exports = { model }
module.exports = { inserir }