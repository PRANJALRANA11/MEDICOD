// Importing express and router
const express = require('express');
const router = express.Router();
const multer  = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the directory where files will be stored
    },
    filename: function (req, file, cb) {
        const fileExt = path.extname(file.originalname);

        // Define how to name the uploaded files with the original extension
        cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

// Importing the controller and its functions and assigning them to the routes
const Controller_auth = require('../Controller/controller_auth.js');
const middleware=   require('../Middleware/middleware.js');
const Email = require('../emails/Email-send.js');


router.post('/signup', Controller_auth.signup);
router.post('/signin', Controller_auth.signin);
router.post('/emailverify', Email.mail_otp);
router.post('/resetpassword',middleware.verifyEmail, Controller_auth.resetpassword);
router.post('/store_report_data',upload.single('uploaded_file'),Controller_auth.save_report_details);

module.exports=router;
