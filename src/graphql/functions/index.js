const userResolvers = require('./user.functions');
const productResolvers = require('./product.functions');
const authResolvers = require('./auth.functions');
module.exports = [
    userResolvers,
    productResolvers,
    authResolvers
]