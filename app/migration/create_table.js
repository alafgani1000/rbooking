var db = require("../config/config_db");

db.connect((err) => {
    if(err) throw err;

    let usersql = `CREATE TABLE users
    (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(255),
        name VARCHAR(255),
        password VARCHAR(255),
        status INT(1),
        created_at DATETIME,
        updated_at DATETIME,
        PRIMARY KEY(id)
    )`;

    let roomsql = `CREATE TABLE rooms
    (
        id INT NOT NULL AUTO_INCREMENT,
        code VARCHAR(255),
        name VARCHAR(255),
        created_at DATETIME,
        updated_at DATETIME,
        status INT(1),
        PRIMARY KEY(id)
    )`;

    let roombooking  = `CREATE TABLE room_booking
    (
        id INT NOT NULL AUTO_INCREMENT,
        room_id INT NOT NULL,
        booking_by INT NOT NULL,
        start_booking DATETIME,
        end_booking DATETIME,
        created_at DATETIME,
        update_at DATETIME,
        PRIMARY KEY(id)
    )`;

    let roomhistorysql = `CREATE TABLE room_history
    (
        id INT NOT NULL AUTO_INCREMENT,
        room_id INT NOT NULL,
        status INT NOT NULL,
        user_input INT NOT NULL,
        user_booking INT NOT NULL,
        created_at DATETIME,
        updated_at DATETIME,
        PRIMARY KEY(id)
    )`;

    db.query(roombooking, (err, result) => {
        if(err) throw err;
        console.log('table room booking created');
    });

    db.query(usersql, (err, result) => {
        if(err) throw err;
        console.log('table users created');
    });

    db.query(roomsql, (err, result) => {
        if(err) throw err;
        console.log('table room created');
    });

    db.query(roomhistorysql, (err, result) => {
        if(err) throw err;
        console.log('table room history created');
    });
});