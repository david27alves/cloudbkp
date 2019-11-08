var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard', dash: true });
});

module.exports = router;
