createMiniHarp = (path,port) ->
	connect = require("connect")
	serveStatic = require("serve-static")
	app = connect()

	console.log("MiniHarp start at 4000...")
	app.use((request, response, next) ->
		console.log request.url	  
		if request.url is "/current-time"			    
			date = (new Date()).toISOString()					    
			response.end date + "\n"									  
		else													    
			next()															  
		return
	).use(serveStatic(path)).listen port

module.exports = createMiniHarp
