var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('project', { title: 'About Us' });
});
// Get handler to  /About
module.exports = router;