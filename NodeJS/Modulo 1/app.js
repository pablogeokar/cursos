const app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

//Iniciando servidor na porta 3000 com mensagem de calback
app.listen(3000, () => {
    console.log("Servidor Express Iniciado na porta 3000");
});