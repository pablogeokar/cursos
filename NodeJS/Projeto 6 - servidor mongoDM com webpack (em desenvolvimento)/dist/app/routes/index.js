
module.exports = ($) => {

	$.get('/', (req, res) => {
		//$.app.controllers.index.index($, req, res);
		res.send('chamou')
	});

}
