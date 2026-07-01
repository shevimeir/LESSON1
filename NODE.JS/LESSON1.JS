const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Hello! This is my first Node.js server! 🚀');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});