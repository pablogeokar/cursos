/** Importar o módulo do framework Express */
const express = require('express');

/** importar o módulo do consign */
const consign = require('consign');

/** importar o módulo do body-parser */
const bodyParser = require('body-parser');

/** importar o módulo do Express-Validator */
const expressValidator = require('express-validator');

/** Iniciar o objeto do express */
const app = express();

/** setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/** configurar o middleware express.static */
app.use(express.static('./app/public'));

/** configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/** configurar o middleware express-validator */
app.use(expressValidator());

/** configura o autoload das rotas, dos models e dos controllers para dentro do objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/** exportar o objeto app */
module.exports = app;