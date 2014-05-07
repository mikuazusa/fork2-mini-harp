#!/usr/bin/env node

var createMiniHarp = require("../lib/index");
var serveStatic = require("serve-static");
var argv = require('minimist')(process.argv.slice(2));
var port = argv.port || 4000;
var root = argv._[0] || process.cwd(); 
// default is current directory, argv._ is array and we must use argv._(0) to get the path name not array
var app = createMiniHarp(root);

console.log("Starting http server on http://localhost:" + port);
console.log(argv._[0]);

app
	.use(function(request, response, next) {
    var url = request.url;
    console.log(url);
    if (url === "/current-time") {
		var date = (new Date()).toISOString();
        response.end(date + '\n');
    } else {
	    next();
    }
})
	.use(serveStatic(root))
	.listen(port);
