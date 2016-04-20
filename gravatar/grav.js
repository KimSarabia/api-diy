'use strict';

var hash = md5(urlParts[1]);
var gravatarurl = 'www.gravatar.com/avatar/' + hash;
res.end(gravatarUrl);
