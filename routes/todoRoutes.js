// create a router
const express = require('express');
const todoController = require('../controllers/todoController');
const todoRouter = express.Router();

// add routes to the router
todoRouter.post('/', todoController.createTodo);
todoRouter.get('/', todoController.getTodos);
todoRouter.get('/:id', todoController.getTodo);

// export the router
module.exports = todoRouter;