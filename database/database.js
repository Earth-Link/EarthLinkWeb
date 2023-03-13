//CONNECTING TO OUR DATABASE

const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "rdsearthlink.ctjtolagqnxt.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "123123123",
  port: "3306",
  database: "earthlink",
});

connection.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }

  console.log("Connected to database.");
  connection.query("SHOW TABLES", (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      return;
    }
    console.log("Tables in database:");
    results.forEach((result) => {
      console.log(result.Tables_in_earthlink);
    });
  });
});

module.exports = connection;
