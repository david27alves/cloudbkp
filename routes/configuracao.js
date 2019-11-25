var express = require('express');
var { Client } = require('pg');

var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('configuracao', { title: 'Configuração', conf: true });
});

router.post('/', function(req, res) {
	
	const client = new Client({
		user: 'postgres',
		host: '127.0.0.1',
		database: 'dapraca',
		password: 'postgres',
		port: 5432,
	});
	client.connect();

	client.query('select * from loja', (err, res) => {

		if (res) {
			console.log('Conectou');
		} else {
			console.log(err);
		}
		
		client.end();
	})
	res.redirect('/configuracao');

});

module.exports = router;