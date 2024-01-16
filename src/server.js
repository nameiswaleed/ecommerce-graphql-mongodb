const express = require('express');
const config = require('./config');
const db = require('./database');
const port = config.port;
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServer } = require('@apollo/server');
const { resolvers, typeDefs } = require('./graphql');
const cors = require('cors');
const nodemailer = require('nodemailer');
const morgan = require('morgan');
// create apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
//initializing express app
const app = express();
// initialize middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// main api route
app.get('/', (req, res) => {
  res.sendStatus(200);
});
/**
 * Starts the Apollo server.
 *
 * @return {Promise<void>} - A promise that resolves when the server is started.
 */
const startApolloServer = async () => {
  try {
    await server.start();
    app.use('/graphql', cors(), express.json(), expressMiddleware(server));
  } catch (err) {
    console.log(`[ERR IN START APOLLO SERVER]`, err);
  }
};
startApolloServer();
app.listen(port, () => console.log(`app is listenin on http://localhost:${port}/graphql`));
