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
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    return res.end('This is the Overview Page');
  } else if (pathName === '/api') {
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, {
        'Content-type': 'application/json',
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'Hello World',
    });
    return res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000 ');
});
