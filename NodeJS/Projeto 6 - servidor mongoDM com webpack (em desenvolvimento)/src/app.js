/* importar as configurações do servidor */
import app from './app/server/server'
import config from './config/config';

//Faz a leitura ddo config.js no objeto 'config.server.porta'
let porta = config.server.porta;

/** */
/* parametrizar a porta de escuta */
app.listen(porta, function () {
	console.log('Servidor WEB iniciado com sucesso na porta: ' + porta);
});
