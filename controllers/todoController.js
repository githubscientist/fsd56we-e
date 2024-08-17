const Todo = require('../models/todo');

const todoController = {
    createTodo: async (req, res) => {
        try {
            // get the description from the request body
            const { description } = req.body;

            // create a new todo
            const newTodo = new Todo({
                description
            });

            // save the todo to the database
            const savedTodo = await newTodo.save();

            // send the saved todo as a response
            res.send({ message: 'Todo created successfully', todo: savedTodo });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    getTodos: async (req, res) => {
        try {
            const todos = await Todo.find({}, { __v: 0 });

            res.status(200).send({ message: 'Todos fetched successfully', todos });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    getTodo: async (req, res) => {
        try {
            const { id } = req.params;

            // const todo = await Todo.find({ _id: id}, { __v: 0 });
            const todo = await Todo.findById(id, { __v: 0 });

            res.send({ message: 'Todo fetched successfully', todo });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}

module.exports = todoController;