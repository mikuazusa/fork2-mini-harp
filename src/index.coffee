connect = require("connect")
app = connect()
argv = require("minimist")(process.argv.splice(2))
serveStatic = require("serve-static")
makeJade = require("../lib/processor/jade")

createMiniHarp = (root) ->
	port = argv.port || 4000
	root = "verify/assets"
	
	console.log "miniHarp server is starting on " + port
	
	app.use((request, response, next) ->
		console.log request.url
		if request.url is "/current-time"			    
			date = (new Date()).toISOString()					    
			response.end date + "\n"												
		else				
			next()
		)	
		.use serveStatic(root)
		.use makeJade(root)
		.listen port 

module.exports = createMiniHarp
