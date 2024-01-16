const userServices = require('../services/user.service');
const tokenServices = require('../services/token.service');
const cryptoServices = require('../services/crypto.service');
const { Users } = require('../database/models');

/**
 * Handles the sign-up process.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @return {object} The newly created user object.
 */
const signUpHandler = async (email, password) => {
  try {
    const user = await userServices.getUserByEmail(email);
    if (user) {
      throw new Error('User already exists');
    } else {
      const hashedPassword = await cryptoServices.hashPassword(password);
      const newUser = await userServices.addUserToDB({
        email,
        password: hashedPassword,
      });
      return newUser;
    }
  } catch (error) {
    console.error(`Err while signing up`, error);
  }
};

/**
 * Handles the login process.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @return {Promise<string>} The token generated upon successful login.
 */
const loginHandler = async (email, password) => {
  try {
    const user = userServices.getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    } else {
      const isPasswordMatch = await cryptoServices.comparePassword(password, user.password);
      if (!isPasswordMatch) {
        throw new Error('Invalid password');
      } else {
        const token = tokenServices.createToken(user);
        return token;
      }
    }
  } catch {
    console.error(`Err while logging in`, error);
  }
};

module.exports = {
  loginHandler,
  signUpHandler,
};
