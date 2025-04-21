const mysql = require("mysql2");

// TWO ways to connect to db:
// 1. Create single connection per request.

// OR

// 2. Create connection pull.
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "{password}",
});

module.exports = pool.promise();