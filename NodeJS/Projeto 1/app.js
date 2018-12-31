const app = require('./config/server');

//Iniciando servidor na porta 3000 com mensagem de callback
app.listen(3000, () => {
    console.log("Servidor Express Iniciado na porta 3000");
});