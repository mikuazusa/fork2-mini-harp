createMiniHarp = () ->
	connect = require("connect")
	app = connect()
	return app

module.exports = createMiniHarp