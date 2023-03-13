//CONNECTING TO OUR DATABASE

const mysql = require("mysql");
var connection = mysql.createConnection({
  host     : 'rdsearthlink.ctjtolagqnxt.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : '123123123',
  port     : '3306'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

module.exports = connection;