module.exports.index = ($, req, res) => {
    var connection = $.app.server.dbConnection;

    var usuarios = new $.app.models.usuarios(connection);
    console.log(usuarios);
   
    //usuarios.consulta();

    res.render('index');
}