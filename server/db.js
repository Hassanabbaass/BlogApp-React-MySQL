const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    root:'root',
    password:'PFH#23kgrw9',
    database:'blog'
})

module.exports = {db}