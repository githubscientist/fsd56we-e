// create a router
const express = require('express');
const todoController = require('../controllers/todoController');
const todoRouter = express.Router();

// add routes to the router
todoRouter.post('/', todoController.createTodo);

// export the router
module.exports = todoRouter;