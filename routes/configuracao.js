var express = require('express');
var { Client } = require('pg');

var router = express.Router();

var connBD = false;

router.get('/', function(req, res, next) {
	res.render('configuracao', { title: 'Configuração', conf: true });
});

router.post('/', function(req, res, next) {
	console.log(req.body.ip)
	const client = new Client({
		user: 'postgres',
		host: '127.0.0.1',
		database: 'dapraca',
		password: 'postgres',
		port: 5432,
	});
	client.connect();

	client.query("select pg_size_pretty(pg_database_size('dapraca'))", (err, res) => {

		if (res) {
			console.log('Conectou');
		} else {
			console.log(err);
		}
		
		client.end();
	});

	res.redirect('/configuracao');
	

});

module.exports = router;