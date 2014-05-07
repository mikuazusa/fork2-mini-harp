createMiniHarp = (path,port) ->
	connect = require("connect")
	serveStatic = require("serve-static")
	app = connect()

	app.use((request, response, next) ->
		url = request.url
		console.log url	  
		if url is "/current-time"			    
			date = (new Date()).toISOString()					    
			response.end date + "\n"									  
		else													    
			next()															  
		return
	).use(serveStatic(path)).listen port

module.exports = createMiniHarp
