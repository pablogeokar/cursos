/* importar as configurações do servidor */
let app = require('./app/server/server');

/* parametrizar a porta de escuta */
app.listen(80, function(){
	console.log('Servidor online');
})