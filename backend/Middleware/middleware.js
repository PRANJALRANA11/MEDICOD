// middleware
const dotenv = require("dotenv").config();  
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET; // Your secret key

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

module.exports = verifyToken;
