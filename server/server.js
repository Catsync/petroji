// Node Server for AWDND app
var express 		= require("express");
var nocache			= require('./nocache');
var serveStatic		= require('serve-static');
var path 			= require('path');

var basePath = path.resolve(__dirname, '..');

var config = {
	name: 'petroji-dev',
	port: '5000',
	root: basePath+'/public'
}

var app = express();

// Sets http headers to disable caching.
console.log('HTTP Caching Disabled');
app.use(nocache);

// Static Assets
app.use(serveStatic(config.root));

var port = Number(process.env.PORT || config.port);
var server = app.listen(port, function() {
  console.log("%s server listening on port %d",config.name, port);
});

