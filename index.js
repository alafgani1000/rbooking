const path = require('path')
var express = require('express')
var app = express()
var hbs = require('hbs')
var logger = require('morgan')
const router = require('./app/router/web')
app.use(express.static('public'))

var session = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const isEqual = function(a, b, opts) {
    if (a == b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
}
hbs.registerHelper('if_equal', isEqual);

app.use('/', router)

app.listen(4000, function() {
    console.log('Aplikasi sudah berjalan di localhost:4000')
});