const http = require("http");
const fs = require("fs");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// WAY 1
// function reqHandler(req, res) {
//     console.log(req);
// }

// const server = http.createServer(reqHandler);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// WAY 2
// const server = http.createServer(function (req, res) {
//   console.log(req);
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// WAY 3
const server = http.createServer((req, resp) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    resp.write('<html>');
    resp.write('<head><title>Enter Message</title></header>');
    resp.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
    resp.write('</html>');
    return resp.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',() => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    resp.statusCode = 302;
    resp.setHeader('Location', '/');
    return resp.end();
  }

  resp.setHeader('Content-Type', 'text/html');
  
  resp.write('<html>');
  resp.write('<head><title>Hello World</title></header>');
  resp.write('<body><h1>Hello World from my node server.</h1></body>');
  resp.write('</html>');
  resp.end();
});

server.listen(3000);
