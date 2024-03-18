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

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
};

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    //Overview Page

    const cardHTML = dataObj.map((el) => replaceTemplate(tempCard, el));

    res.end(tempOverview);
  } else if (pathName === '/product') {
    return res.end('This is the PRODUCT');
  } else if (pathName === '/api') {
    //API (200)
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(data);
  } else {
    //Not Found (404)
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
