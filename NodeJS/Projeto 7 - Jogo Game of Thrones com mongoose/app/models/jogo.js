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

let Jogo = mongoose.model('jogo', JogoSchema)

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