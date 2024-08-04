// Setup a http web server to listen on port 3001
// import http module
const http = require('http');

// Create a http server -> using createServer method from http module
const server = http.createServer((request, response) => {
    response.end('Hello World');
});

// Listen on port 3001
server.listen(3001, '127.0.0.1', () => {
    console.log(`Server is running on http://127.0.0.1:3001`);
});