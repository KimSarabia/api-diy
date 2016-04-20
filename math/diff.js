'use strict';

module.exports = function(numStrs) {
  return numStrs.reduce((diff,num) => {
    return diff - parseFloat(num);
  });
}
