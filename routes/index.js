var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vegetableegy' });
});

// router.get('/menu', function(req, res) {
//   res.render('menu', { title: 'Menu' });
// });

module.exports = router;
