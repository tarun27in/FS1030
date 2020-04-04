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
    // mycon.query("SELECT * FROM clients", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    
    // Select specific value from results
    // mycon.query("SELECT * FROM clients", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result[2].address);
    //   }); 
    
    //Field values
    mycon.query("SELECT * FROM clients", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
      }); 
    
  });