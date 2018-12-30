module.exports = (application) => {

    application.get('/noticia', (req, res) => {

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (erro, resultado) => {
            res.render("noticias/noticia", { noticia: resultado });
        });

    });

}