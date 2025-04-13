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
  console.log(req.url, req.method, req.headers);

  resp.setHeader('Content-Type', 'text/html');
  
  resp.write('<html>');
  resp.write('<head><title>Hello World</title></header>');
  resp.write('<body><h1>Hello World from my node server.</h1></body>');
  resp.write('</html>');
});

server.listen(3000);
