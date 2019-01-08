module.exports.cadastro = ($, req, res) => {
    /** chama a view de cadastro com o objeto validacao e dadosForm nulos */
    res.render('cadastro', { validacao: {}, dadosForm: {} })
}

module.exports.cadastrar = ($, req, res) => {
    var dadosForm = req.body

    /** inicio Validação dos Dados */
    req.assert('nome', 'Nome não pode ser vazio').notEmpty()
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty()
    req.assert('senha', 'Senha não pode ser vazia').notEmpty()
    req.assert('casa', 'Casa não pode ser vazia').notEmpty()

    var erros = req.validationErrors()

    if (erros) {
        res.render('cadastro', { validacao: erros, dadosForm: dadosForm })
        return
    }
    /** fim Validação dos Dados */

    /** Grava o usuário no banco de dados e redireciona para a rota principal*/
    var usuarios = $.app.models.usuarios.inserir(dadosForm)

    usuarios
        .then(() => {
            res.redirect('/')
        })
        .catch(() => {
            res.send('Ocorreram erros ao cadastrar')
        })

}

module.exports.autenticar = ($, req, res) => {
    var dadosForm = req.body

    /** inicio Validação dos Dados */
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty()
    req.assert('senha', 'Senha não pode ser vazia').notEmpty()

    var erros = req.validationErrors()

    if (erros) {
        res.render('index', { validacao: erros, dadosForm: dadosForm })
        return
    }
    /** fim Validação dos Dados */

    var usuarios = $.app.models.usuarios.autenticar(dadosForm)
    usuarios.then((result) => {
        
        req.session.autorizado = true
        req.session.usuario = result[0].usuario
        req.session.casa = result[0].casa        

        if (req.session.autorizado) {
            res.redirect('/jogo')
        } else {
            res.redirect('/')
        }

    })



}