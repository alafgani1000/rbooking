var http = require('http');
var url = require('url');
var fs = require('fs');

module.exports = {
    index: function(filename) {
        fs.readFile(filename, (err, data) => {
            if(err) throw err;
            return data;
        });  
    }
    
}
