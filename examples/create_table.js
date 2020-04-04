var mysql = require('mysql');

var mycon = mysql.createConnection({
  host: "localhost",
  user: "nodeclient",
  password: "123456",
  database: "testdb"
});

mycon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE clients (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  mycon.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});