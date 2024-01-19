const validate = require('validator');
const { authController } = require('../../controllers');
const { signUpHandler } = authController;
const resolver = {
  Query: {
    login: async (parent, args, context) => {},
  },
  Mutation: {
    signup: async (parent, args, context) => {
      try {
        const { name, email, password } = args;
        if (!name) throw new Error('Name is required');
        if (!email) throw new Error('Email is required');
        if (!password) throw new Error('Password is required');
        if (!validate.isEmail(email)) throw new Error('Invalid email');
        const user_created = await signUpHandler(name, email, password);
        console.log(user_created);
        return user_created;
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    },
  },
};

module.exports = resolver;
