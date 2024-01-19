const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Create a JWT token for a given user.
 *
 * @param {Object} user - The user object.
 * @returns {string} - The JWT token.
 */
const createToken = (user) => {
  return jwt.sign({ userId: user._id }, config.jwtSecret, {
    expiresIn: config.jwtExpirationInterval,
  });
};

/**
 * Verifies a JWT token.
 *
 * @param {string} token - The JWT token to verify.
 * @returns {object} - The decoded token payload.
 */
const verifyJwtToken = (token) => {
  // Verify the token using the jwt library and the jwtSecret from the config
  return jwt.verify(token, config.jwtSecret);
};

module.exports = { createToken, verifyJwtToken };
