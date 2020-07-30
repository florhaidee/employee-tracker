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

module.exports = connection;