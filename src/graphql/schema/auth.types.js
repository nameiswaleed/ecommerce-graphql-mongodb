const authSchema = `#graphql
type Token{
    token: String
    expiry: String
}
type Query{
    login:User
}
type Mutation{
    signup(name: String!, email: String!, password: String!): User
}

`
module.exports = authSchema