module.exports = ($) => {

	$.get('/', (req, res) => {		
		$.app.controllers.index.index($, req, res)
	})

	$.get('/cadastro', (req, res) => {	
		$.app.controllers.usuarios.cadastro($, req, res)
	})

	$.get('/cadastrar', (req, res) => {	
		$.app.controllers.usuarios.cadastro($, req, res)
	})

	$.post('/cadastrar', (req, res) => {	
		$.app.controllers.usuarios.cadastrar($, req, res)
	})

	$.get('/autenticar', (req, res) => {	
		$.app.controllers.index.index($, req, res)
	})

	$.post('/autenticar', (req, res) => {	
		$.app.controllers.usuarios.autenticar($, req, res)
	})

	$.get('/jogo', (req, res) => {	
		$.app.controllers.jogo.jogo($, req, res)
	})

	$.get('/sair', (req, res) => {	
		$.app.controllers.jogo.sair($, req, res)
	})

	$.get('/suditos', (req, res) => {	
		$.app.controllers.jogo.suditos($, req, res)
	})

	$.get('/pergaminhos', (req, res) => {	
		$.app.controllers.jogo.pergaminhos($, req, res)
	})

	$.post('/ordenar_acao_sudito', (req, res) => {	
		$.app.controllers.jogo.ordenar_acao_sudito($, req, res)
	})

	

}