var http = require('http');
var url = require('url');
var fs = require('fs');

export class HelperClass {
    static view(filename) {
        fs.readFile(filename, (err, data) => {
            if(err) throw err;
            return data;
        });            
    }
}