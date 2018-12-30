module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        var connection = app.config.dbConnection();       

        connection.query('select * from noticias', (erro, resultado) => {
            res.render("noticias/noticias", { noticias: resultado });
        });

    });

}