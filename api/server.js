const express = require('express');

const apiRouter = require('./api-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: `server is up` });
});

server.use('/api', apiRouter);

module.exports = server;
