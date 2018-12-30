//Utiliza o Framework Express
const express = require('express');
//Carrega o servidor Express dentro da constante app
const app = express();

//Seta a Engine servidora de Views
app.set('view engine', 'ejs');

//Rotas
app.get('/', (req, res) => {
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render("admin/form_add_noticia");
});

app.get('/noticias', (req, res) => {
    res.render("noticias/noticias");
});

//Iniciando servidor na porta 3000 com mensagem de calback
app.listen(3000, () => {
    console.log("Servidor Express Iniciado na porta 3000");
});