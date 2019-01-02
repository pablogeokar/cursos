/**Exemplo chamando o require direto */
const dbConnection = require('./app/server/dbConnection');

dbConnection.then(
    () =>{
        console.log('conectou ao banco com sucesso')        ;
    },
    err => {
        console.log('Problemas ao conectar com o banco')
    }
);

/*
//Exemplo usando consign
$.app.server.dbConnection.then( () =>{
    console.log('Conectou');
});

//Exemplo atribuindo o connectiona uma variável
var connection = $.app.server.dbConnection;
    connection.then(console.log('conectou com sucesso'));

*/