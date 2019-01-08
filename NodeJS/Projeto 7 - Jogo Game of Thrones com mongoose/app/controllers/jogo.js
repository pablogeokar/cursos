module.exports.jogo = ($, req, res) => {

    if (req.session.autorizado) {
        res.render('jogo', { img_casa: req.session.casa })
    } else {
        res.redirect('/')
    }


}

module.exports.sair = ($, req, res) => {

    req.session.destroy()
    res.redirect('/')


}

