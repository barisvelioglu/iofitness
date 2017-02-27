var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/changelanguage', function (req, res, next) {
  res.setLocale([req,res], req.query.lang);
  res.cookie('i18nSettings', req.query.lang , { maxAge: 9000000 });
  res.render('index', { title: 'Express'});
});

module.exports = router;
