var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var booking = require('./app/controller/BookingController.js');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
	switch(request.url){
        case '/':
            fs.readFile('./view/frontend/index.html', (err, data) => {
                if(err) throw err;
                response.write(data);
            });  
            break;
		case '/about':
			response.write("ini adalah halaman about");
			break;
		case '/profile':
			response.write("ini adalah halaman profile");
			break;
		default: 
            response.write("404: Halaman tidak ditemukan");
	}
	return response.end();
}).listen(8000);

console.log('server runing on server 8000');