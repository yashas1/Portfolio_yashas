var express = require('express');
var router = express.Router();

/* About page router. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'yashas portfolio' });
});

module.exports = router;
