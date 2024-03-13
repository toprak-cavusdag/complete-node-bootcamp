const fs = require('fs');
const http = require('http');
const url = require('url');

//////////////////////////////
// Files
// Blocking, Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `this is what we know  about avocado:  ${textIn} \n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written');

//Non-Blocking, Asynchronous way
// fs.readFileSync('./txt/start.txt', 'utf-8', (err, data) => {
//   if (err) return console.log('ERROR!', '💥');

//   console.log(data);
// });

/////////////////////////////
// Server
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('Hello From The Server!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000 ');
});
