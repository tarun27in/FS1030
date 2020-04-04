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
  var sql = "INSERT INTO clients (name, address) VALUES ?";

  // Array for values
  var values = [
    ['John', 'Lawerence East'],
    ['Peter', 'College Street'],
    ['Amy', '100 Spadina']
    ];
  mycon.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Records Affected: " + result.affectedRows);
    // console.log("Results: " + JSON.stringify(result));
  });
});