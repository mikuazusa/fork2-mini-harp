#!/usr/bin/env node

var createMiniHarp = require("../lib/index");
var argv = require('minimist')(process.argv.slice(2));
var port = argv.port || 4000;
var app = createMiniHarp();

console.log("Starting http server on http://localhost:" + port);
app.listen(port);
