module.exports.iniciaChat = (application, req, res) => {

    var dadosForm = req.body;

    req.assert('apelido', 'O Apelido é Obrigatório').notEmpty();
    req.assert('apelido', 'O Apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    //Utiliza a variável global 'io' criada em app.js
    application.get('io').emit(
        'msgParaCliente', 
        { apelido : dadosForm.apelido, mensagem: ' acabou de entrar no chat'}
        );

    res.render('chat', {dadosForm: dadosForm});
}

