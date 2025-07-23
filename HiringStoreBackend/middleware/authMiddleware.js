const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

/**
 * Middleware to verify JWT token and protect routes
 */
const protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECERT_KEY);

      // Get user from the token (exclude password)
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }

      next();
    } catch (error) {
      console.error('Auth error:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

/**
 * Middleware to check if user is an admin
 * Must be used after the protect middleware
 */
const admin = (req, res, next) => {
  if (req.user && req.user.userType === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

/**
 * Middleware to check if user is an employer
 * Must be used after the protect middleware
 */
const employer = (req, res, next) => {
  if (req.user && (req.user.userType === 'employer' || req.user.userType === 'admin')) {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an employer' });
  }
};

module.exports = { protect, admin, employer }; 