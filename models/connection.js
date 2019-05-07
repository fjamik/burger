// Dependencies
const mysql = require("mysql");
require("dotenv").config()

let connection;

// Connect with JawsDB database on our Heroku app
// 	If not found, then run locally
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PWD,
    database: "burgers_db"
  });
}

// Export our MySQL connection
module.exports = connection;