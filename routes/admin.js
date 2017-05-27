var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var Volounteer = require('../models/volounteer');
router.get('/',checkLogin, function(req, res, next) {
  var user = req.session.user;
  console.log("im in admin + "+req.session.user);
  res.render('admin');
});

function checkLogin(req,res,next)
{
  if(!req.session.user)
  {
    res.redirect('/auth/login');
  }
  else
    next();
}

module.exports = router;
