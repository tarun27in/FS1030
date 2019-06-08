var mysql = require('mysql');

var mycon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "w8p3c9x",
  database: "testdb"
});

mycon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO clients (name, address) VALUES('Tarun','North York')";
  mycon.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 Record Inserted");
  });
});