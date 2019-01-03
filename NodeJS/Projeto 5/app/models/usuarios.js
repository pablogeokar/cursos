const config = require('../../config/config');
const mongoose = require('mongoose')

let uri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(uri, {useNewUrlParser: true});
mongoose.Promise = global.Promise


var Schema = new mongoose.Schema({
    nome: String,
    senha: String,
    usuario: String,
    casa: String
})

/*
try {
    Schema = mongoose.model('usuarios', usuarios);
} catch (e) {
    Schema = mongoose.model('usuarios');
}
*/
var model = mongoose.model('usuarios', Schema);
module.exports = {model}
