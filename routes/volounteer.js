var express = require('express');
var router = express.Router();
var NewVolounteer = require('../models/NewVolounteer');

router.get('/',checkLogin, function(req, res, next) {
  var user = req.session.user;
  console.log("im in admin + "+req.session.user);
  res.render('NewVolounteer');
});

function checkLogin(req,res,next)
{
  if(!req.session.user)
  {
    res.redirect('/auth/login/Volounteerlogin');
  }
  else
    next();
}

module.exports = router;
