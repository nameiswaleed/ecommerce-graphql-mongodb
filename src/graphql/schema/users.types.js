const userTypes = `#graphql
type User{
    _id: ID!
    name: String!
    email: String!
    role: String!
    email_verified: Boolean
    created_at: String
    updated_at: String
}
type Query{
hello: String
getAllUsers: [User]
getSingleUser(id: ID!): User
}
type Mutation{
updateUser(id: ID, name: String, email: String,role: String): User
deleteUser(id: ID!): User
}
`;
module.exports = userTypes;
