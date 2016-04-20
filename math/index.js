'use strict';

module.exports = function(params, res){
  var operation = params.shift();

  switch(operation){
    case 'sum':
    var sum = require('./sum')(params);
    res.write(`${sum}`);
    break;

    case 'diff':
    var diff = require('./diff')(params);
    res.write(`${diff}`);
    break;

    case 'product':
    var product = require('./product')(params);
    res.write(`${product}`);
    break;

    case 'quotient':
    var quotient = require('./quotient')(params);
    res.write(`${quotient}`);
    break;

    case 'square':
    var square = require('./square')(params);
    res.write(`${square}`);
    break;

    case 'cube':
    var cube = require('./cube')(params);
    res.write(`${cube}`);
    break;
  }
  res.end('\n');
};

function randNum(){
  return Math.floor(Math.random() * 100);
}
