const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2> Welcome to your homepage!!</h2>`);
});

module.exports = server;
