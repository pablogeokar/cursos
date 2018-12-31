const mysql = require('mysql');

const connMySQL = () =>{
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
};

module.exports = () => {
    console.log('O Autoload carregou o modulo de conexão com o banco de dados')
    return connMySQL;
    
}
