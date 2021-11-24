var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Page2' });
});

router.get('/api/list', function(req, res, next) {
  res.render('fragments/list');
});

module.exports = router;
