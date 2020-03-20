const express = require('express');
const recipesRouter = require('./recipes-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2> Welcome to your homepage!!</h2>`);
});

server.use('/api/recipes', recipesRouter);

module.exports = server;
