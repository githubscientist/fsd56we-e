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

const fs = require('fs');

// import the express module
const express = require('express');

// create an express application
const app = express();

// use the express middleware for parsing json data
app.use(express.json());

// Define a route handler for the default "GET" request "/"
app.get("/createFile", (request, response) => {
    // your logic goes here to get the current timestamp and format it
    // and make it as a file name and the value to be written in the file

    // create a file in a folder called as files
    fs.writeFile('files/file.txt', 'Hello World!', () => {
        response.send('File created successfully');
    });
});

app.post("/getAllFiles", (request, response) => {
    
});

// start the server and listen on port 3001
app.listen(3001, () => {
    console.log(`Server running on port 3001 at http://127.0.0.1:3001`);
});