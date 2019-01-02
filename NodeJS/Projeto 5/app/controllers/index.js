module.exports.index = ($,req, res) => {
    $.app.server.dbConnection.then( () =>{
        console.log('Fez uma requisição ao banco');
    });    
    res.render('index');
}