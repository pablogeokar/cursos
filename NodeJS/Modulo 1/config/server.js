//Utiliza o Framework Express
const express = require('express');

//Responsavel por carregar as rotas automaticamente
const consign = require('consign');

//Carrega o servidor Express dentro da constante app
const app = express();

//Seta a Engine servidora de Views
app.set('view engine', 'ejs');

//Seta o diretório das Views
app.set('views', './app/views');

/*Dá o include da pasta routes e configuração do banco de dados
 e inclui dentro do servidor
*/
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);


//Exportacao do Modulo
module.exports = app;
