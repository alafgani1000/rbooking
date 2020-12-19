var db = require("../config/config_db");
const session = require("express-session");

exports.formLogin = (request, response) => {
    response.render('login', {
        message: request.params.message
    })
}

exports.prosesLogin = (request, response) => {
    var username = request.body.username
    var password = request.body.password
    if (username && password) {
        const data = db.connect((err) => {
            db.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (err, results, field) => {
                if (results.length > 0) {
                    request.session.loggedin = 1;
                    request.session.username = username;
                    response.redirect('/home');
                } else {
                    response.redirect('/login/2')
                }
                response.end();

            })
        })
    } else {
        response.redirect('/login/3')
        response.end();
    }
}

exports.home = (request, response) => {
    if (request.session.loggedin == 1) {
        response.render('home', {
            username: request.session.username
        })
    } else {
        response.redirect('/')
    }

}

exports.logout = (request, response) => {
    request.session.destroy((err) => {
        if (err) {
            return console.log(err)
        }
        response.redirect('/')
    })
}