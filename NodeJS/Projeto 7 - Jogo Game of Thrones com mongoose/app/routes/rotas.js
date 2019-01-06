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


}