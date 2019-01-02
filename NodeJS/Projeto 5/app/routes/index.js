module.exports = ($) => {

	$.get('/', function (req, res) {
		$.app.controllers.index.index($, req, res);
	});

}