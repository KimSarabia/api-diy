'use strict';

var http = require('http');

const PORT = 8080;

function handleRequest(req,res){
  res.end('It works! Path Hit!' + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s",PORT);
})
