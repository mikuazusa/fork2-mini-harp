createMiniHarp = require("../index")
argv = require("minist")(process.argv.splice(2))

command = () ->
	console.log createMiniHarp(argv.port)

module.exports = command
