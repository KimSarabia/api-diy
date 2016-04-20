//THIS IS THE GRAVATAR MODULE
'use strict';

module.exports = function(params,res){
  var str = decodeURIComponent(params[0]);
  res.write(str);
  res.end('\n');
};
