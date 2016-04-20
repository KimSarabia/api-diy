'use strict';

const PORT = 8080;

var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res) => {
  var params = req.url.split('/');
  params.shift();
  var resource = params.shift().toLowerCase();
  console.log(resource);

  switch(resource) {
    case 'math': require('./math')(params,res);break;
    case 'str': require('./str')(req, res, params); break;
    case '':
     var data = fs.readFileSync('./public/index.html');
     res.end( data.toString() );
     break;

    default:
    fs.readFile(`./public/${resource}`, (err,data) => {
      if(err) {
        res.statusCode = 404;
        res.write('Oops. Something went wrong.');
        res.end('\n');
      } else {
        res.end( data.toString() );
      }
    });
  }
});

server.listen(PORT, function(err){
  if(err) return console.log('error!:', err);
  console.log(`Server listening on port ${PORT}`);
});
