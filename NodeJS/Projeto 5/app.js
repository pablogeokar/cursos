/* importar as configurações do servidor */
let app = require('./app/server/server');

//Faz a leitura ddo config.js no objeto 'config.server.porta'
let porta = app.config.config.server.porta;


/* parametrizar a porta de escuta */
app.listen(porta, function () {
	console.log('Servidor iniciado com sucesso na porta ' + porta);
});