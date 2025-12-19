// 1. Create a hello world webapp using “http” core module in NodeJS. (A)
const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });

// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.
// (B)

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     if (req.url === '/') {
//         res.end('<h1>Home Page</h1>');
//     } 
//     else if (req.url === '/about') {
//         res.end('<h1>About Page</h1>');
//     } 
//     else if (req.url === '/contact') {
//         res.end('<h1>Contact Page</h1>');
//     } 
//     else if (req.url === '/services') {
//         res.end('<h1>Services Page</h1>');
//     } 
//     else if (req.url === '/help') {
//         res.end('<h1>Help Page</h1>');
//     } 
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Page Not Found</h1>');
//     }
// });

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using
// http core module (C)


// const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        fs.readFile('about.txt', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    } 
    else if (req.url === '/contact') {
        fs.readFile('contact.txt', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
