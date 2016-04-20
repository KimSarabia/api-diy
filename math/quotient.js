'use strict';

module.exports = function(numStrs) {
  return numStrs.reduce(function(quotient, num){
  return quotient / num;
  });
}
