const http = require("http");

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

  if (url === '/') {
    resp.write('<html>');
    resp.write('<head><title>Enter Message</title></header>');
    resp.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
    resp.write('</html>');
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
