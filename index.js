const path = require('path')
var express = require('express')
var app = express()
var hbs = require('hbs')
const router = express.Router()
var logger = require('morgan')

const bookingController = require('./app/controller/BookingController')

app.use(express.static('public'))

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', bookingController.index)

app.get('/data', bookingController.getData)

app.listen(4000, function(){
    console.log('Aplikasi sudah berjalan di localhost:4000')
});