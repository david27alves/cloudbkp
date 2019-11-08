var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('agendamento', { title: 'Agendamento', agen: true });
});

module.exports = router;