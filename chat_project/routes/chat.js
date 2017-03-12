var express = require('express');
var router = express.Router();

/* GET Chat page. */
router.get('/', function(req, res, next) {
	//console.log('%o',req);
	var param = { title: 'Express', userId : 'guest' }
	res.render('chat', param);
});

router.get('/:id', function(req, res, next) {
	//console.log('%o',req);
	var param = { title: 'Express', userId : req.params.id }
	res.render('chat', param);
});

module.exports = router;
