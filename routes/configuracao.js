var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('configuracao', { title: 'Configuração', conf: true, conectado: req.params.con });
});

router.post('/', function(req, res) {
	var conBD = false;
	console.log("Não conectou");
	res.redirect('/configuracao');
});

module.exports = router;