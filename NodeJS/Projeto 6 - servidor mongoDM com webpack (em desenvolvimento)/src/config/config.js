/** Criação do objeto responsável por armazenar as configurações gerais do app */
let config = {};
config.db = {};
config.session = {};
config.server ={};

/*****************************************/
/**  CONFIGURAÇÕES BANCO DE DADOS MONGODB*/
config.db.host = 'localhost:27017';
config.db.name = 'got';

/*****************************************/
/**  CONFIGURAÇÕES DO SERVIDOR WEB       */
config.server.porta = 80;

/*****************************************/
/** OUTRAS CONFIGURAÇÕES */
config.session.chave = '00A02105B7E11190C50254CFA9729DBD1E69F126241664AFF3EB98F177DF84B8';

/** Torna a variável disponível para outros módulos */
export default config;