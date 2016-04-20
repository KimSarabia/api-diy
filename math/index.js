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
    var diff = require('./product')(params);
    res.write(`${product}`);
    break;
  }
  res.end('\n');
};

function randNum(){
  return Math.floor(Math.random() * 100);
}
