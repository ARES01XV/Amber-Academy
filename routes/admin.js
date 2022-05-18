var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db')

// GET admin 
router.get('/', function(req, res) {
  conn.query('SELECT * FROM restaurant_ordering_system.admin', (err, rows) => {
    if (err) {
      res.render('admin', { title: 'Admin', admin: '' });
    } else {
      res.render('admin', { title: 'Admin',  admin: rows});
    }
  });
});

// delete
router.get('/delete/:admin_id', function(req, res) {
  conn.query('DELETE FROM restaurant_ordering_system.admin WHERE admin_id =' + req.body.admin_id, (err, rows) => {
    if (err) {
      res.render('admin', { title: 'Admin', admin: '' });
    } else {
      res.render('admin', { title: 'Admin',  admin: rows});
    }
  });
});

// Get Update EJS
router.get('/update/:admin_id', function(req, res) {
  conn.query('SELECT * FROM restaurant_ordering_system.admin', (err, rows) => {
    if (err) {
      res.render('admin-edit', { title: 'Admin', admin: '' });
    } else {
      res.render('admin-edit', { title: 'Admin',  admin: rows[0]});
    }
  });
});

// Post update
  
router.post('/post', (req, res) => {
  const data = {
    admin_id: req.body.admin_id,
    admin_name: req.body.admin_name,
    admin_password: req.body.admin_password
  }

  conn.query('UPDATE restaurant_ordering_system.admin SET ? WHERE admin_id =' + req.body.admin_id, data, (err, rows) => {
    if(err) throw err
      res.redirect('/admin');
  });
});



module.exports = router;
