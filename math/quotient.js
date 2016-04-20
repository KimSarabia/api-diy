'use strict';

module.exports = function(numStrs) {
  if (numStrs.length === 1) { return 'infinity'; };
  return numStrs.reduce(function(quotient, num){
  return quotient / num;
  });
}
