/** importa as variáveis de configuração */
import config from '../../config/config'
/* importar o módulo do framework express */
import express from 'express'
/** 
* importar o módulo helmet (responsável por 
* fornecer uma camada extra de sgurança ao express.js) 
* */
import helmet from 'helmet'
/* importar o módulo do consign */
import consign from 'consign'
/* importar o módulo do body-parser */
import bodyParser from 'body-parser'
/* importar o módulo do express-validator */
import expressValidator from 'express-validator'
/** importar o módulo do express-session */
import expressSession from 'express-session'
/** importa o módulo de conexão ao banco de dados mongodb */
import mongoose from 'mongoose'

/* iniciar o objeto do express */
const app = express()

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs')
app.set('views', './app/views')

/** utiliza o helmet para fornecer uma camada extra de segurança no servidor */
app.use(helmet())

/* configurar o middleware express.static */
app.use(express.static('./app/public'))

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/* configurar o middleware express-validator */
app.use(expressValidator());

/** configurar o middleware express-session */
app.use(expressSession({
	secret: `${config.session.chave}`,
	resave: false,
	saveUninitialized: false
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('dist/app/routes')
	//.then('./config/config.js')	
	.then('dist/app/models')
	.then('dist/app/controllers')
	.into(app);

/*** CONECTA AO BANCO DE DADOS MONGODB*/	
let uri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(uri, { useNewUrlParser: true }, (err, res) => {
	if (err) {
		console.log('ERRO ao conectar o banco de dados na url: ' + uri + '. ' + err);
	} else {
		console.log('Banco de Dados conectado com sucesso na url: ' + uri);
	}
});
mongoose.Promise = global.Promise


export default app