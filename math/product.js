'use strict';

module.exports = function(numStrs) {
  return numStrs.reduce((product,num) => {
    return product * num;
  }, 1);
}
// multiply: function product(x){
//   return x.reduce(function(acc, curr){
//     return acc * curr;
//   }, 1);
// },
