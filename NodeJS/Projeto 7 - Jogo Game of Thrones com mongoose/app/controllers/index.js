module.exports.index = ($, req, res) => {

    if (req.session.autorizado) {
        res.redirect('/jogo')
    } else {
        res.render('index',{validacao:{}})
    }

    

    /*

    var usuarios = $.app.models.usuarios;

    usuarios.model.find({}, (err, result) => {         
        res.render('index', {usuarios: result});
    });
    */


}

