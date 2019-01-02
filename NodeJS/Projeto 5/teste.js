const dbConnection = require('./app/server/dbConnection');

dbConnection.then(
    () =>{
        console.log('conectou com sucesso')        ;
    },
    err => {
        console.log('errou')
    }
);