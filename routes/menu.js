var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db')

// GET menu 
router.get('/', function(req, res) {
  conn.query('SELECT * FROM restaurant_ordering_system.menu', (err, rows) => {
    if (err) {
      res.render('menu', { title: 'Menu', menu: '' });
    } else {
      res.render('menu', { title: 'Menu',  menu: rows});
    }
  });
});



module.exports = router;
