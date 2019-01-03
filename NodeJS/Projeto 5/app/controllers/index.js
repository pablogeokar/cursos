module.exports.index = ($, req, res) => {


    var usuarios = $.app.models.usuarios;

    usuarios.model.find({}, (err, result) => {         
        res.render('index', {usuarios: result});
    });


}

