module.exports.jogo = ($, req, res) => {

    if (req.session.autorizado !== true) {
        res.redirect('/')
        return
    }

    var msg = ''
    if (req.query.msg !== '') {
        msg = req.query.msg
    }

    var usuario = req.session.usuario
    var Jogo = $.app.models.jogo.iniciaJogo(usuario)
    Jogo
        .then((result) => {
            res.render('jogo', { img_casa: req.session.casa, jogo: result[0], msg: msg })
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

    var Acao = $.app.models.jogo.listar_acao(req.session.usuario)
    Acao.then(result => {
        res.render('pergaminhos', { acoes: result })
    }).catch(() => {
        res.redirect('/jogo?msg=A')
        return
    })
   
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
        res.redirect('/jogo?msg=A')
        return
    }

    dadosForm.usuario = req.session.usuario
    var Acao = $.app.models.jogo.acao(dadosForm)
    Acao
        .then((result) => {
            res.redirect('/jogo?msg=B')
        })

}
