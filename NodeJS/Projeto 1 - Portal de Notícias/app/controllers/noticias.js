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
    var id_noticia = req.query; 

    noticiasModel.getNoticia(id_noticia,(erro, resultado) => {
        res.render("noticias/noticia", { noticia: resultado });
    });
}