var db = require("../config/config_db");

exports.getData = (request, response) => {
    response.render('index', {
        title: 'Room booking application'
    })
}

exports.index = (request, response) => {
    const data = db.connect((err) => {
        let roomsql = `select * from rooms`

        db.query(roomsql, (err, result) => {
            if (err) throw err;
            response.render('index', {
                title: 'Room booking application',
                datares: result
            })
        })
    })
}

exports.view = (request, response) => {
    const view = db.connect((err) => {
        let roomsql = `select * from rooms`

        db.query(roomsql, (err, result) => {
            if (err) throw err;
            response.render('booking_room', {
                title: 'Room booking application',
                datares: result
            })
        })
    })
}

exports.booking = (request, response) => {
    var roomId = request.params.id
    const view = db.connect((err) => {
        let roomsql = 'select * from rooms where id = ?'

        db.query(roomsql, [roomId], (err, result, fields) => {
            if (err) throw err;
            response.render('form_booking', {
                title: 'Room booking application',
                datares: result[0]
            })
        })
    })
}