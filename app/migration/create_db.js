var mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});

db.connect((err) => {
    if(err) throw err;
    let sql = `CREATE DATABASE rbooking`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log('Database created');
    });
});