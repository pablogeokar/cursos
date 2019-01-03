module.exports.index = ($, req, res) => {
    
    var usuarios = $.app.models.usuarios;
    console.log(usuarios);

    res.render('index');
    
}