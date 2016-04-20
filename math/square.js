'use strict';

module.exports = function(numStrs) {
  if (typeof numStrs === 'number') { return numStrs*numStrs; };
    return numStrs.map(function(num){
      return num*num;
  });
}
