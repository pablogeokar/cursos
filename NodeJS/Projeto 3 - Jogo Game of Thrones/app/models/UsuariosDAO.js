function UsuariosDAO(connection) {
	this._connection = connection;
}

UsuariosDAO.prototype.inserirUsuario = function (usuario, res) {
	var dados = {
		operacao: "inserir",
		usuario: usuario,
		collection: "usuarios",
		callback: function (err, result) {
			console.log('Usuário ' + usuario.usuario + ' Cadastrado com Sucesso');
		}
	};
	this._connection(dados);
};

UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
	var dados = {
		operacao: "pesquisar",
		usuario: usuario,
		collection: "usuarios",		
	};
	this._connection(dados, req, res);	

};

module.exports = function () {
	return UsuariosDAO;
};  