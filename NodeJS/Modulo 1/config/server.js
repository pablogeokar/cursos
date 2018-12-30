//Utiliza o Framework Express
const express = require('express');
//Carrega o servidor Express dentro da constante app
const app = express();
//Seta a Engine servidora de Views
app.set('view engine', 'ejs');
//Seta o diretório das Views
app.set('views', './app/views');
//Exportacao do Modulo
module.exports = app;
