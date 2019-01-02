function JogoDAO(connection) {
    this._connection = connection();
}

JogoDAO.prototype.gerarParametros = (usuario) => {
    var dados = {
        operacao: "inserir_parametros_usuario",
        usuario: usuario,
        habilidades: {
            moeda: 15,
            suditos: 10,
            temor: Math.floor(Math.random() * 1000),
            sabedoria: Math.floor(Math.random() * 1000),
            comercio: Math.floor(Math.random() * 1000),
            magia: Math.floor(Math.random() * 1000),
        },
        collection: "jogo",
        callback: function (err, result) {
            console.log('Habilidades geradas');
        }
    };
    this._connection(dados);
}

module.exports = () => {
    return JogoDAO;
}