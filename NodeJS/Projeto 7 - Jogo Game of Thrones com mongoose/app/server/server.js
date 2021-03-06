/** importa as variáveis de configuração */
const config = require('../../config/config'),

	/* importar o módulo do framework express */
	express = require('express'),
	/** 
	 * importar o módulo helmet (responsável por 
	 * fornecer uma camada extra de sgurança ao express.js) 
	 * */
	helmet = require('helmet'),

	/* importar o módulo do consign */
	consign = require('consign'),

	/* importar o módulo do body-parser */
	bodyParser = require('body-parser'),

	/* importar o módulo do express-validator */
	expressValidator = require('express-validator'),

	/** importar o módulo do express-session */
	expressSession = require('express-session'),

	/** importa o módulo de conexão ao banco de dados mongodb */
	mongoose = require('mongoose'),	

	/* iniciar o objeto do express */
	app = express();

/** desabilita a pluralização dos nomes daas collections */
mongoose.pluralize(null)

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs')
app.set('views', './app/views')

/** utiliza o helmet para fornecer uma camada extra de segurança no servidor */
app.use(helmet())

/* configurar o middleware express.static */
app.use(express.static('./app/public'))

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }))

/* configurar o middleware express-validator */
app.use(expressValidator())

/** configurar o middleware express-session */
app.use(expressSession({
	secret: `${config.session.chave}`,
	resave: false,
	saveUninitialized: false
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('./config/config.js')	
	.then('app/models')
	.then('app/controllers')
	.into(app)

/*** CONECTA AO BANCO DE DADOS MONGODB*/	
let uri = `mongodb://${config.db.host}/${config.db.name}`

mongoose.connect(uri, { useNewUrlParser: true }, (err, res) => {
	if (err) {
		console.log('ERRO ao conectar o banco de dados na url: ' + uri + '. ' + err)
	} else {
		console.log('Banco de Dados conectado com sucesso na url: ' + uri)
	}
});
mongoose.Promise = global.Promise


/* exportar o objeto app */
module.exports = app