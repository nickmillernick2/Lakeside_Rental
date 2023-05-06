var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "Nicholasm1!",
  database: "LakesideDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE reservations (reservationId int NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), message VARCHAR(255), arrive DATE, depart DATE)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});