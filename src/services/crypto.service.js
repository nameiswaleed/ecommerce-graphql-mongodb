const bcrypt = require('bcrypt');


// services to create and hash password 

/**
 * Generates a hashed password using bcrypt.
 * 
 * @param {string} password The password to be hashed.
 * @returns {string} The hashed password.
 */
const createHashPassword = (password) => {
    // Generate a salt with a cost factor of 10
    const salt = bcrypt.genSaltSync(10);
    
    // Hash the password using the generated salt
    return bcrypt.hashSync(password, salt);
}
/**
 * Compare a password with a hashed password.
 *
 * @param {string} password - The plain text password.
 * @param {string} hashPassword - The hashed password.
 * @returns {boolean} - True if the password matches the hash, false otherwise.
 */
const comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};

module.exports = { createHashPassword }