//Utiliza o Framework Express
const express = require('express');

//Responsavel por carregar as rotas automaticamente
const consign = require('consign');

//Responsável por receber requisições via post e tratar
const bodyParser = require('body-parser');

//Responsável por validar as requisições
const expressValidator = require('express-validator');

//Carrega o servidor Express dentro da constante app
const app = express();

//Seta a Engine servidora de Views
app.set('view engine', 'ejs');

//Seta o diretório das Views
app.set('views', './app/views');

//usa o bodyParser e converte as requisições em tratativas jSon
app.use(bodyParser.urlencoded({extended: true}));
//usa o expressValidator para validar as requisições do tipo post
app.use(expressValidator());

/*Dá o include da pasta routes e configuração do banco de dados
 e inclui dentro do servidor
*/
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);


//Exportacao do Modulo
module.exports = app;
