// Importing express and router
const express = require('express');
const router = express.Router();

// Importing the controller and its functions and assigning them to the routes
const Controller_auth = require('../Controller/controller_auth.js');
const middleware=   require('../Middleware/middleware.js');
const Email = require('../emails/Email-send.js');

router.post('/signup', Controller_auth.signup);
router.post('/signin', Controller_auth.signin);
router.post('/emailverify', Email.mail_otp);
router.post('/resetpassword',middleware.verifyEmail, Controller_auth.resetpassword);


module.exports=router;
