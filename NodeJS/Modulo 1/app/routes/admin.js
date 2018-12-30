module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
    });

    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body;

        req.assert('titulo', 'Titulo é Obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é Obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é Obrigatória').notEmpty();
        //req.assert('data_noticia', 'Data é Obrigatória').isDate({format: 'yyyy-mm-dd'});
        req.assert('noticia', 'Notícia é Obrigatória').notEmpty();

        var erros = req.validationErrors();

        if (erros) {
            res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, (erro, resultado) => {
            res.redirect('/noticias');
        });

    });
}
