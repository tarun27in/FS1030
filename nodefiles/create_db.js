var mysql = require('mysql');

var mycon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "w8p3c9x"
});

mycon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  mycon.query("CREATE DATABASE testdb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});