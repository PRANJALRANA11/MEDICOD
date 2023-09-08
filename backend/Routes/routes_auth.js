// Importing express and router
const express = require('express');
const router = express.Router();

// Importing the controller and its functions and assigning them to the routes
const Controller_auth = require('../Controller/controller_auth.js');
router.post('/signup', Controller_auth.signup);

module.exports=router;
