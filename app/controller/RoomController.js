const express = require("express")
const expressSession = require("express-session")
var bodyParser = require('body-parser')
const fs = require('fs')
var db = require("../config/config_db");
const { response } = require("express");
var app = express()

// require('../../public/')

exports.create = (request, response) => {
    response.render('create_room.html')
}

exports.edit = (request, response) => {
    var roomId = request.params.id
    const view = db.connect((err) => {
        let roomsql = 'select * from rooms where id = ?'

        db.query(roomsql, [roomId], (err, result, fields) => {
            if (err) throw err;
            response.render('edit_room', {
                title: 'Room booking application',
                datares: result[0]
            })
        })
    })
}

exports.update = (req, res) => {
    isFile = req.file;
    var codeReq = req.body.code
    var nameReq = req.body.name
    var roomId = req.body.id

    if (typeof isFile === "undefined") {
        const view = db.connect((err) => {
            let roomsql = 'UPDATE rooms SET code = ?, name = ? where id = ?'
                // update
            db.query(roomsql, [codeReq, nameReq, roomId], (err, result, fields) => {
                if (err) throw err;
            })
        })
        res.redirect('/room/view')
        res.end()
    } else {
        var fileName = req.file.filename
        var fileUpload = 'images/' + fileName
        var delPath = "./public/"
        var file = ''
        var getFile = db.connect((err) => {
            let roomsql = 'select * from rooms where id = ?'
            db.query(roomsql, [roomId], (err, result, fields) => {
                if (err) throw err;
                file = delPath + result[0].image
                fs.unlink(file, function(err) {
                    if (err) return console.log(err);
                    console.log('file deleted successfully');
                });
            })
        })

        const update = db.connect((err) => {
            let roomsql = 'UPDATE rooms SET code = ?, name = ?, image = ? where id = ?'
                // update   
            db.query(roomsql, [codeReq, nameReq, fileUpload, roomId], (err, result, fields) => {
                if (err) throw err;
            })
        })
        res.redirect('/room/view')
        res.end()
    }
}

exports.view = (request, response) => {
    const view = db.connect((err) => {
        let roomsql = `select * from rooms`

        db.query(roomsql, (err, result) => {
            if (err) throw err;
            response.render('view_room', {
                title: 'Room booking application',
                datares: result
            })
        })
    })
}


exports.store = (req, res) => {
    console.log(req)
    var codeReq = req.body.code
    var nameReq = req.body.name
    var fileName = req.file.filename
    var fileUpload = 'images/' + fileName
    var create = Date.now()
    var update = Date.now()
    console.log(req.body)
    var post = { code: codeReq, name: nameReq, image: fileUpload, created_at: create, updated_at: update }
    db.query('INSERT INTO rooms SET ?', post, function(error, results, fields) {
        if (error) throw error;
        // Neat!
    })
    res.redirect('/home')
    res.end()
}