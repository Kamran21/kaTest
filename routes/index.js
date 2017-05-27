var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'home' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { page: 'team' });
});

router.get('/artical', function(req, res, next) {
  res.render('artical', { page: 'artical' });
});

router.post('/contact',function(req,res,next){
      'use strict';
    const nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'contactsalametcom@gmail.com',
            pass: 'salametcom1234'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"${req.body.username}" <${req.body.email}>`, // sender address
        to: 'testsalametcom@gmail.com', // list of receivers
        subject: 'Message from Salametcom website', // Subject line
        text: `${req.body.message} You can call me at ${req.body.tel}`, // plain text body
        html: `<b>Email from: ${req.body.username}</b><br><p>${req.body.message}<p><br><i>Phone:${req.body.tel}<i>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.redirect('/emailSent');
    });
    
});

router.get('/emailSent',function(req,res,next){
    
    res.render('emailSent',{ page: 'emailSent' });
});

module.exports = router;
