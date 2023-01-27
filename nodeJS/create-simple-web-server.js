'use strict'

const fs = require('fs');
const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {
    res.end('Hello from the server!');
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to request on port ${port}`);
})