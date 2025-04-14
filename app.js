const http = require("http");
const routes = require("./routes");

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
//const server = http.createServer(routes);
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
