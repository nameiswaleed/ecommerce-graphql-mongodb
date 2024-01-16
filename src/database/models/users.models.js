const { userTypes } = require('../../config/types');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enums: userTypes,
    default: 'user',
  },
});
const Users = mongoose.model('Users', userSchema, 'Users');

module.exports = Users;
