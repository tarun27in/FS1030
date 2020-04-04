var mysql = require('mysql');

var mycon = mysql.createConnection({
  host: "localhost",
  user: "nodeclient",
  password: "123456",
  database: "testdb"
});

mycon.connect(function(err) {
    if (err) throw err;
    //console.log("Print All");
    mycon.query("SELECT * FROM clients", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    
    //console.log ('Select specific value from results')
    mycon.query("SELECT * FROM clients", function (err, result, fields) {
        if (err) throw err;
        console.log(result[2].address);
      }); 
    
    //Field values
    //console.log ('Print Columns')
    mycon.query("SELECT * FROM clients", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
      }); 
    
  });