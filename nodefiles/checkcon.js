var mysql = require('mysql');

var mycon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "w8p3c9x"
});

mycon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});