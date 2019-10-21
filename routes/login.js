var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('login/login', { title: 'Login | UPBackup' })
});

module.exports = router;