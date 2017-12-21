var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');
//var thisPage = require('./public/index.html');

exports.handleRequest = function (req, res) {
  fs.readFile('./web/public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
   //  console.log('the req is ');
   // console.log(req);
    res.write(data);
    res.end();
  });
  // if (req.method === 'GET') {
  //   // res.write(this.html);
  
  //   console.log('you made a GET request');
  // } else {
  //   console.log('you made some other type of request');
  // // }
  // res.end(archive.paths.list);
};
