const express = require('express');
const helmet = require('helmet') // third-party secure middleware
const logger = require('./api/logger.js'); // custom logger middleware

const projectRouter = require('./data/helpers/projectRouter.js');

const server = express();

// middleware
server.use(helmet()); // third party middleware
server.use(express.json()); // built-in middleware

// routes

server.get('/', logger('logger for server.js'), (req, res) => {
  res.send(`<h2>Let's write our own server!</h2>`)
});

// server.use('/api/projects', logger('logger for projects'), projectRouter);
server.use('/api/projects', projectRouter);



module.exports = server;
