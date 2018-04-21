var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "ashfaq",
  password: "Ashfaq@1999"
});

conn.connect(function(err) {
  if (err) throw err;//if any error throw the error
  console.log("Connected!");//if it is successful then print connected
});