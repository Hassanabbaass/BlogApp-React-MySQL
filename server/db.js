const mysql = require('mysql');

export const db = mysql.createConnection({
    host:'localhost',
    root:'root',
    password:'PFH#23kgrw9',
    database:'blog'
})