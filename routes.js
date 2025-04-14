const fs = require("fs");

const requestHandler = (req, resp) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    resp.write("<html>");
    resp.write("<head><title>Enter Message</title></header>");
    resp.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>'
    );
    resp.write("</html>");
    return resp.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        resp.statusCode = 302;
        resp.setHeader("Location", "/");
        return resp.end();
      });
    });
  }

  resp.setHeader("Content-Type", "text/html");
  resp.write("<html>");
  resp.write("<head><title>Hello World</title></header>");
  resp.write("<body><h1>Hello World from my node server.</h1></body>");
  resp.write("</html>");
  resp.end();
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard code text",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard code text";

exports.handler = requestHandler;
exports.someText = "Some hard code text";
