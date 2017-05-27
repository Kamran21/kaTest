var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');


router.post('/', function(req, res, next) {
  console.log(req.body.editor1);
  res.render('admin',{artical: req.body.editor1});
});


module.exports = router;