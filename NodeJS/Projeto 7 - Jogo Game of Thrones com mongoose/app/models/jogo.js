const mongoose = require('mongoose')

let JogoSchema = new mongoose.Schema({    
    usuario: {type: String, required: true},
    moeda: { type: Number, required: true },
    suditos: { type: Number, required: true },
    temor: { type: Number, required: true },
    sabedoria: { type: Number, required: true },
    comercio: { type: Number, required: true },
    magia: { type: Number, required: true }
}, {versionKey: false })

let AcaoSchema = new mongoose.Schema({    
    usuario: {type: String, required: true},
    acao: { type: Number, required: true },
    quantidade: { type: Number, required: true },
    acao_termina_em: { type: Number, required: true },    
}, {versionKey: false })

let Jogo = mongoose.model('jogo', JogoSchema)
let Acao = mongoose.model('acao', AcaoSchema)

module.exports.gerarParametros = (usuario) =>{
    
    return Jogo.create({
        usuario: usuario,         
        moeda: 15,
        suditos: 10,
        temor: Math.floor(Math.random() * 1000),
        sabedoria: Math.floor(Math.random() * 1000),
        comercio: Math.floor(Math.random() * 1000),
        magia: Math.floor(Math.random() * 1000)
    })
 
 }

 module.exports.iniciaJogo = (usuario) =>{
    
    return Jogo.find({usuario: usuario})
 
 }

 module.exports.acao = (acao) => {

    var date = new Date()
    var tempo = null

    switch(parseInt(acao.acao)){
        case 1: tempo = 1 * 60 * 60000; break;
        case 2: tempo = 2 * 60 * 60000; break; 
        case 3: tempo = 5 * 60 * 60000; break;
        case 4: tempo = 5 * 60 * 60000; break;
    }

    acao.acao_termina_em = date.getTime() + tempo

    return Acao.create(acao)    
 }

 module.exports.listar_acao = (usuario) => {
    
    return Acao.find({usuario: usuario})
 }