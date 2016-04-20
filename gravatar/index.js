//GRAVATAR INDEX

'use strict';

module.exports = function(req, res) {
    var params = req.url.split('/')
    console.log('string:', params);
    var op = params.shift();

    op = op.toLowerCase();
    console.log(op);

    switch (op) {
        case 'wordcount':

            var str = decodeURIComponent(params[0]);

            var count = str.split(' ').length;

            res.write(`${count}\n`);
    res.end();

    break;

    default:
    res.statusCode = 404;
    res.write('Not Found!');
    res.end('\n');
}
};
