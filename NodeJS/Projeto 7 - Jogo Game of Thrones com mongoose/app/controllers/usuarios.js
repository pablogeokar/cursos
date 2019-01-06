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
    /*
    var usuarios = $.app.models.usuarios
    usuarios.model.create(dadosForm, function (err, small) {
        if (err) return res.send('Problemas ao Cadastrar')
        res.redirect('/')
      });
      */

    var usuarios = $.app.models.usuarios.inserir(dadosForm)

    usuarios.then((err, res) => {
        if (err) res.send('Ocorreram erros ao cadastrar')
        res.redirect('/')
    })


}