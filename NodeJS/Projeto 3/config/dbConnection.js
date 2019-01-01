
var mongo = require("mongodb").MongoClient;
var assert = require("assert");
const url = "mongodb://localhost:27017/";
const dbName = "got";

const stringConexao = "mongodb://localhost:27017/got";

/*
var connMongoDB = function (dados) {
    mongo.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Conexão com o banco de dados ABERTA");
        const db = client.db(dbName);
        query(db, dados);
        client.close();
    });
};
*/

var conexaoMongoDB = (dados, req, res) => {

    mongo.connect(stringConexao, { useNewUrlParser: true }, (err, client) => {
        //se encontrar erro na conexão então informa no console
        if (err) {
            console.log(err);
        } else {
            console.log("Conexão com o banco de dados ABERTA");
            const db = client.db(dbName);
            query(db, dados, req, res);
            client.close();
            console.log("Conexão com o banco de dados FECHADA");
        }
    });

};

function query(db, dados, req, res) {
    var collection = db.collection(dados.collection);
    switch (dados.operacao) {
        case "inserir":
            collection.insertOne(dados.usuario, dados.callback);
            break;
        case "pesquisar":
            collection.find(dados.usuario).toArray(function (err, result) {                
                
                /** Grava a sessão se o resultado da consulta não for igual a vazio */
                if (result[0] != undefined) {
                  req.session.autorizado = true; //nome da sessão aqui chamada de autorizado (poderia ser qualquer nome)
                  req.session.usuario = result[0].usuario;
                  req.session.casa = result[0].usuario;

                }

                if (req.session.autorizado){
                    res.redirect('jogo');
                } else {
                    res.render('index', {validacao: {}});
                }
                
            });
            break;
        default: break;
    }
}

module.exports = function () {
    //return connMongoDB;
    return conexaoMongoDB;
};














/** importar o mongodb */
/* CÓDIGO ANTIGO
const mongo = require('mongodb');

var connMongoDB = () => {
    var db = new mongo.Db(
        'got', //nome do banco
        new mongo.Server(
            'localhost', //string com o endereço do servidor do banco de dados
            27017, //porta de conexão
            {} //objeto de configurações extras do servidor
        ),
        {} //outro objeto de configurações adicionais do mongodb
    );

    return db;
}


module.exports = () => {
    return connMongoDB;
}
*/