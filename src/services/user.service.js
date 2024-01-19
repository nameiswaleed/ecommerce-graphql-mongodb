const { Users } = require('../database/models');

/**
 * Adds a user to the database.
 *
 * @param {Object} user - The user object to be added to the database.
 * @returns {Promise<Object>} - A promise that resolves to the newly created user object.
 * @throws {Error} - If there is an error adding the user to the database.
 */
const addUserToDB = async (user) => {
  try {
    // Create a new user object with the provided data
    const newUser = new Users(user);
    // Save the new user to the database and return the result
    return await newUser.save();
  } catch (err) {
    // Log any errors that occur during the process
    console.log('[ERR IN ADD USER SERVICE]', err);
  }
};
/**
 * Retrieve a single user from the database.
 * @param {string} id - The ID of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user object if found, otherwise an error is logged.
 */
const getSingleUser = async (id) => {
  try {
    // Find user by ID in the Users collection
    const user = await Users.findById(id);
    return user;
  } catch (err) {
    // Log any errors that occur during the retrieval process
    console.log('[ERR IN GET SINGLE USER SERVICE]', err);
  }
};
/**
 * Retrieves all users from the database.
 * @returns {Promise<Array>} - A promise that resolves to an array of user objects.
 */
const getAllUsers = async () => {
  try {
    // Find all users in the database and store them in the 'users' variable
    const users = await Users.find();
    return users;
  } catch (error) {
    // Log any errors that occur during the retrieval of users
    console.log('[ERR IN GET ALL USERS SERVICE]', error);
  }
};
/**
 * Get user from database based on email.
 * @param {string} email - The email of the user.
 * @returns {Promise<object>} - A promise that resolves to the user object.
 * @throws {Error} - If there was an error retrieving the user from the database.
 */
const getUserByEmail = async (email) => {
  try {
    const user = await Users.findOne({ email });
    return user;
  } catch (error) {
    console.log('[ERR IN GET USER BY EMAIL SERVICE]', error);
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await Users.findByIdAndDelete(id);
    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    console.log('[ERR IN GET USER BY EMAIL SERVICE]', error);
    throw error;
  }
};

//exporting functions
module.exports = {
  addUserToDB,
  getSingleUser,
  getAllUsers,
  getUserByEmail,
  deleteUserById,
};
