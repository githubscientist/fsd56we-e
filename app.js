// import the express module
const express = require('express');
const todoRouter = require('./routes/todoRoutes');

// create an express application
const app = express();

// use the express middleware for parsing json data
app.use(express.json());

app.use('/api/v1/todos', todoRouter);

module.exports = app;