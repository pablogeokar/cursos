const mongoose = require('mongoose')

var UsuariosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true, select: false },
    usuario: { type: String, required: true },
    casa: { type: String, required: true }   
}, {versionKey: false })

var Usuario = mongoose.model('usuarios', UsuariosSchema)

/**
 *  Insere os dados no banco
 */
module.exports.inserir = (dados) =>{
    
   return Usuario.create(dados)

}

module.exports.autenticar = (dados) => {
    return Usuario.find(dados)
}