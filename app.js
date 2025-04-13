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
  console.log(req);
});

server.listen(3000);
