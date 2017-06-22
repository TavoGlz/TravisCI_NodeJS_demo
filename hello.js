//Importing needed NodeJS core modules.
var http = require('http');
//Creating a new http server for request/response management.
http.createServer(function (req, res) {
  //Defining the Content-Type our server is going send as response.
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //Presetting a string as a response.
  //Atention!! Missing semi-colon will fail the build (on purpose of course).
  res.end('Hello World\n');
  //Setting the port on which our server will be listening through
}).listen(1337, '127.0.0.1');
//Printing a message in console log showing our server is already running
console.log('Server running at http://127.0.0.1:1337/');
