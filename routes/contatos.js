module.exports = function(app) {
	var autenticar = require('./../middlewares/autenticador')
	  , contatos = app.controllers.contatos;

	var contatos = app.controllers.contatos;
	app.get('/contatos', contatos.index);
	app.get('/contato/:id', autenticar, contatos.show);
	app.post('/contato', contatos.create);
	app.get('/contato/:id/editar', autenticar, contatos.edit);
	app.put('/contato/:id', autenticar, contatos.update);
	app.delete('/contato/:id', autenticar, contatos.destroy);
}