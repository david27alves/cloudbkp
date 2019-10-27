var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('agendamento', { title: 'Agendamento', select: true });
});

module.exports = router;