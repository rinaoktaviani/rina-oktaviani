var http = require('http');
var dt = require('./test1');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.test());
  res.end();
}).listen(8080); 