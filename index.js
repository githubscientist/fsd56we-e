// import the express module
const express = require('express');

// create an express application
const app = express();

// Define a route handler for the default "GET" request "/"
app.get("/", (request, response) => {
    response.send("Hello World!");
});

// start the server and listen on port 3001
app.listen(3001, () => {
    console.log(`Server running on port 3001 at http://127.0.0.1:3001`);
});