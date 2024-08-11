// import the express module
const express = require('express');

// create an express application
const app = express();

// use the express middleware for parsing json data
app.use(express.json());

app.get("/", (request, response) => {
    response.json({ message: "Hello, World!!" });
});

module.exports = app;