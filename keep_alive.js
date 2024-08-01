var http = require('http');

http.createServer(fuction ( req, res) {
  res.write("Im alive");
  res.end();
}).listen(8080);
