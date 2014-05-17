var path = require("path");

function route(){
	return function(req, res, next){
		if (req.url == "/"){
			req.url += "index.html";
		}
		next();
	}
}

module.exports = route;
