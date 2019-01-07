const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    usuario: { type: String, required: true },
    casa: { type: String, required: true }    
}, {versionKey: false });

var model = mongoose.model('usuarios', Schema)

/**
 *  Insere os dados no banco
 */
module.exports.inserir = (dados) =>{
    
   return model.create(dados);

}