const cTable = require('console.table');
require('dotenv').config();

// get the client
const mysql = require('mysql2');
// create the connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER, 
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});
// con.promise().query("SELECT * FROM employees")
//   .then( ([rows,fields]) => {
//     console.table(rows);
//   })
//   .catch(
//       console.log('an error ocurred'))
//   .then( () => con.end());

module.exports = connection;