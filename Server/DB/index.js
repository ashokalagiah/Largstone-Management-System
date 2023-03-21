
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Suresh*@mysql',
    database: 'lms'
})


module.exports = db;