const mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;

let JogoSchema = new mongoose.Schema({
   usuario: { type: String, required: true },
   moeda: { type: Number, required: true },
   suditos: { type: Number, required: true },
   temor: { type: Number, required: true },
   sabedoria: { type: Number, required: true },
   comercio: { type: Number, required: true },
   magia: { type: Number, required: true }
}, { versionKey: false })

let AcaoSchema = new mongoose.Schema({
   usuario: { type: String, required: true },
   acao: { type: Number, required: true },
   quantidade: { type: Number, required: true },
   acao_termina_em: { type: Number, required: true },
}, { versionKey: false })

let Jogo = mongoose.model('jogo', JogoSchema)
let Acao = mongoose.model('acao', AcaoSchema)

module.exports.gerarParametros = (usuario) => {

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

module.exports.iniciaJogo = (usuario) => {

   return Jogo.find({ usuario: usuario })

}

module.exports.acao = (acao) => {

   var date = new Date()
   var tempo = null

   switch (parseInt(acao.acao)) {
      case 1: tempo = 1 * 60 * 60000; break;
      case 2: tempo = 2 * 60 * 60000; break;
      case 3: tempo = 5 * 60 * 60000; break;
      case 4: tempo = 5 * 60 * 60000; break;
   }

   acao.acao_termina_em = date.getTime() + tempo

   var moedas = null
   switch (parseInt(acao.acao)) {
      case 1: moedas = -2 * acao.quantidade; break;
      case 2: moedas = -3 * acao.quantidade; break;
      case 3: moedas = -1 * acao.quantidade; break;
      case 4: moedas = -1 * acao.quantidade; break;
   }

   var jogo = Jogo.updateOne({ usuario: acao.usuario }, { $inc: { moeda: moedas } }, {}).exec();

   return Acao.create(acao)


}

module.exports.listar_acao = (usuario) => {

   var date = new Date()
   var momento_atual = date.getTime()

   return Acao.find({ usuario: usuario, acao_termina_em: { $gt: momento_atual } })
}

module.exports.revogar_acao = (_id) => {

   return Acao.findOneAndDelete({_id: _id},{}).exec()
}
