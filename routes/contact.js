var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { info: 'Persnal Information' });
});
// Get handler to  /About
module.exports = router;