var mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'rbooking'    
});

module.exports = db;