var db = require("../config/config_db");

exports.index = (request, response) => {
    response.render('index', {
        title: 'Room booking application'
    })
}


exports.getData = (request, response) => {
    var data = db.connect((err) => {    
        let roomsql = `select * from rooms`    
    
        db.query(roomsql, (err, result) => {
            if(err) throw err;
            console.log(result);
        });
    });

    response.send('get data')
}

