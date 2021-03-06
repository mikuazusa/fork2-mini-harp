var path = require("path");

function reject(){
	return function(req, res, next){
		if (path.extname(req.url) == ".jade" || path.extname(req.url) == ".less"){
			res.statusCode = 404;
			res.end();
		}
		next();
	}
} 

module.exports = reject;
