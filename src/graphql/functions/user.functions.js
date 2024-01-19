const { getAllUsers, getSingleUser, deleteUserById } = require('../../services/user.service');

module.exports = {
  Query: {
    getAllUsers: () => {
      return getAllUsers();
    },
    getSingleUser: (_, { id }) => {
      return getSingleUser(id);
    },
  },
  Mutation: {
    deleteUser: (_, { id }) => {
      return deleteUserById(id);
    },
  },
};
