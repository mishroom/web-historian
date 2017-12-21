var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');


// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10,
//   'content-type': 'application/json'
// };

// var sendResponse = function(response, data, statusCode) {
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

// var collectData = function(request, callback) {
//   var data = "";
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     callback(JSON.parse(data));
//   });
// };

var actions = {
  'GET': function(req, res) {
    console.log('you made a GET request');
    if (req.url === '/') {
      fs.readFile('./web/public/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log('we are looking for index.html');
        res.end();
      });
    } else if (req.url.slice(0, 4) !== '/www') {
      console.log(req.url);
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end();
    } else {
      console.log(req.url);
      var thisUrl = req.url.slice(5, -4);
      console.log(thisUrl);
      fs.readFile('./archives/sites/' + thisUrl, function(err, data) {
        console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('/' + thisUrl + '/');
        res.end();      
      });
    } 
  },
  'POST': function(request, response) {
    console.log('you made a POST request');
  },
  'OPTIONS': function(request, response) {
    console.log('you made an OPTIONS request');
  }
};

exports.handleRequest = function (req, res) {
  var file = './web/public/index.html';
  var action = actions[req.method];
  if (action) {
    action(req, res);
    // fs.readFile('./web/public/styles.css', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/css'});
    //   res.write(data);
      
    // });
  } 
};

