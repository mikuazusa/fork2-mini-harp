connect = require("connect")
app = connect()
argv = require("minimist")(process.argv.splice(2))
serveStatic = require("serve-static")
makeJade = require("../lib/processor/jade")
makeLess = require("../lib/processor/less")
route = require("../lib/processor/route")
reject = require("../lib/processor/reject")

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
		.use reject()
		.use route()
		.use serveStatic(root)
		.use makeJade(root)
		.use makeLess(root)
		.listen port 

module.exports = createMiniHarp
