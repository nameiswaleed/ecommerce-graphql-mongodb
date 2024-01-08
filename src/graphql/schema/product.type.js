const productSchema = `#graphql
type Product{
    id: ID
    name: String!
    description: String!
    price: Float!
    category: Category
}
type Category{
    id: ID
    name: String!
}
type Query{
    getAllProducts: [Product]
    getSingleProduct: Product
    getProductsByCategory(categoryId: ID!): [Product]
    getAllCategories: [Category]
    getSingleCategory: Category
    
}
type Mutation{
    addCategory(name: String!): Category
    deleteCategory(id: ID!): Category
    addProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product
    updateProduct(id: ID!, name: String!, description: String!, price: Float!, categoryId: ID!): Product
    deleteProduct(id: ID!): Product
}
`;

module.exports = productSchema