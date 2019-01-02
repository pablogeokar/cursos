function usuarios (connection){
    this._connection = connection;
}

usuarios.prototype.consulta = () => {
    //var Schema = $.app.server.dbConnection;
    console.log(this._connection);
    //console.log(Schema);
}

module.exports = () => {
    return usuarios;
}
