const dotenv = require("dotenv").config();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET; // Your JWT secret key
const jwtEmailSecret = process.env.JWT_SECRET_EMAIL_VERIFY;

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.header('Authorization'); // Get the token from the header

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, jwtSecret);
    
    // Attach the user data to the request for future use
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Middleware to verify email verification token
function verifyEmail(req, res, next) {
  const emailVerificationToken = req.header('EmailVerify');
  
  // Check if token is present
  if (!emailVerificationToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify and decode the email verification token
    const decoded = jwt.verify(emailVerificationToken, jwtEmailSecret);
    
    // Attach the user data to the request for future use
    req.user = decoded;
    console.log(req.user.id); // Log the user ID for debugging, if needed
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
}

module.exports = { verifyToken, verifyEmail };
