module.exports.jogo = ($, req, res) => {

    if (req.session.autorizado !== true) {
        res.redirect('/')
        return
    }

    var comando_invalido = 'N'
    if (req.query.comando_invalido == 'S') {
        comando_invalido = 'S'
    }

    var usuario = req.session.usuario
    var Jogo = $.app.models.jogo.iniciaJogo(usuario)
    Jogo
        .then((result) => {
            res.render('jogo', { img_casa: req.session.casa, jogo: result[0], comando_invalido: comando_invalido })
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

module.exports.suditos = ($, req, res) => {
    
    if (req.session.autorizado !== true) {
        res.redirect('/')
        return
    }
    res.render('aldeoes', { validacao: {} })
}

module.exports.pergaminhos = ($, req, res) => {
    
    if (req.session.autorizado !== true) {
        res.redirect('/')
        return
    }
    res.render('pergaminhos', { validacao: {} })
}

module.exports.ordenar_acao_sudito = ($, req, res) => {
    
    if (req.session.autorizado !== true) {
        res.redirect('/')
        return
    }

    var dadosForm = req.body

    req.assert('acao', 'Ação deve ser informada').notEmpty()
    req.assert('quantidade', 'A Quantidade deve ser informada').notEmpty()

    var erros = req.validationErrors()

    if (erros) {
        res.redirect('/jogo?comando_invalido=S')
        return
    }

    console.log(dadosForm)
    res.send('tudo ok')

}
