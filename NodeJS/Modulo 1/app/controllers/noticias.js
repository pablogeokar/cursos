module.exports.noticias = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((erro, resultado) => {
        res.render("noticias/noticias", { noticias: resultado });
    });
};

module.exports.noticia = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia((erro, resultado) => {
        res.render("noticias/noticia", { noticia: resultado });
    });
}