module.exports.jogo = ($, req, res) => {

    if (req.session.autorizado !== true) {
        res.redirect('/')
        return
    }
    var usuario = req.session.usuario
    var Jogo = $.app.models.jogo.iniciaJogo(usuario)
    Jogo        
        .then((result) => {            
            res.render('jogo', { img_casa: req.session.casa, jogo: result[0] })
        })
        .catch(() => {
            res.send('Ocorreram erros ao iniciar o jogo')
        })

}

module.exports.sair = ($, req, res) => {

    req.session.destroy((err) => {
        res.redirect('/')
    })

}

