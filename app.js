// import the express module
const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const requestLogger = require('./utils/logger');

// create an express application
const app = express();

// use the express middleware for parsing json data
app.use(express.json());

// use the express middleware for logging
app.use(requestLogger);

app.use('/api/v1/todos', todoRouter);

module.exports = app;