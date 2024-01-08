const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const functions = require('./functions');
const schema = require('./schema');
const typeDefs = mergeTypeDefs(schema);
const resolvers = mergeResolvers(functions);

module.exports = {
  typeDefs,
  resolvers,
};
