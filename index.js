'use strict';

var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();
var logger = require('morgan');

app.use(logger('dev'));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/view/index.html'));
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