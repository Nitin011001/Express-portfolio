var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Get handler to  /About
// router.get('/about', function(req, res, next) {
//   res.render('about', { title: 'About' });
// });
// router.get('/contact', function(req, res, next) {
//   res.render('contact', {  });
// });
module.exports = router;
