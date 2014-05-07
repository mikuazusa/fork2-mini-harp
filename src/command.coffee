createMiniHarp = require("../lib/index")
argv = require("minimist")(process.argv.splice(2))
port = argv.port || 4000
path = argv._[0] || process.cwd()

command = () ->
	createMiniHarp(path,port)

module.exports = command
