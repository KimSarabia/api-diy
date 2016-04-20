'use strict';

const PORT = 8080;

var http = require('http');

var server = http.createServer((req,res) => {
  var params = req.url.split('/');
  params.shift();
  var task = params.shift();

  switch(task){
    case 'math': require('./math')(params,res);
    break;

    default:
    res.write('Default.');
    res.end('\n');
  }
});

server.listen(PORT, function(err){
  if(err) return console.log('error:', err);
  console.log(`Node server listening on port ${PORT}`);
});
