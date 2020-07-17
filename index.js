'use strict';

var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger('dev'));

app.use(express.static(__dirname+'/publik'));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/profil', (req, res) => {
    res.send('This is profile');
});

app.get('/contact', (req, res) => {
    res.send('Contact in here');
});

app.listen(4000, function(){
    console.log('Aplikasi sudsah berjalan di localhost:4000');
});