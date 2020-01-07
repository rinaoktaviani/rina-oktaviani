var http = require('http');
var dt = require('./uji');
var apaaja = require('./tst2')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.ujicoba()+ apaaja.ujicoba());
  res.end();
}).listen(8080); 