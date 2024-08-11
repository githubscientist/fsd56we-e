let todos = [
    {
        "createdAt": "2024-08-09T20:48:21.798Z",
        "description": "M<5ZN>9P*O",
        "status": false,
        "id": "1"
    },
    {
        "createdAt": "2024-08-09T16:47:34.291Z",
        "description": "n(MM_\"{uJ*",
        "status": true,
        "id": "2"
    },
    {
        "createdAt": "2024-08-09T21:13:54.918Z",
        "description": "S0L6&fAImL",
        "status": true,
        "id": "3"
    },
    {
        "createdAt": "2024-08-09T13:28:34.778Z",
        "description": "SNMTb?Ir]S",
        "status": true,
        "id": "4"
    },
    {
        "createdAt": "2024-08-10T06:31:33.096Z",
        "description": "/<|}S%a6sB",
        "status": true,
        "id": "5"
    }
];

const mongoose = require('mongoose');

// import the express module
const express = require('express');

// create an express application
const app = express();

// use the express middleware for parsing json data
app.use(express.json());

app.get("/", (request, response) => {
    response.json({ message: "Hello, World!!" });
});

// Define a route handler for the default "GET" request "/"
app.get("/api/v1/todos", (request, response) => {
    response.json(todos);
});

app.get("/api/v1/todos/:id", (request, response) => {
    const id = request.params.id;
    const todo = todos.find(todo => todo.id === id);
    response.json(todo);
});

app.post("/api/v1/todos", (request, response) => {
    const todo = request.body;
    todos.push(todo);
    response.json(todo);
});

app.put("/api/v1/todos/:id", (request, response) => {
    const id = request.params.id;
    const todo = todos.find(todo => todo.id === id);

    todo.description = request.body.description;
    todo.status = request.body.status;

    const filteredTodos = todos.filter(todo => todo.id !== id);
    filteredTodos.push(todo);

    todos = filteredTodos;

    response.json(todo);
});

app.delete("/api/v1/todos/:id", (request, response) => {
    const id = request.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === id);
    todos.splice(todoIndex, 1);
    response.json({ message: `Todo ${id} deleted` });
});

// start the server and listen on port 3001
app.listen(3001, () => {
    console.log(`Server running on port 3001 at http://127.0.0.1:3001`);
});

mongoose.connect('mongodb://localhost:27017/fsd56wee')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB: ', error);
    });