// import the express module
const express = require('express');

const Todo = require('./models/todo');

// create an express application
const app = express();

// use the express middleware for parsing json data
app.use(express.json());

app.post('/api/v1/todos', async (req, res) => {
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
})

module.exports = app;