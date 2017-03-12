var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var param = { title: 'Express', UserId : 'NaRa' }
  res.render('index', param);
});

module.exports = router;
