
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Sabari781@',
    database: 'ems'
})


module.exports = db;