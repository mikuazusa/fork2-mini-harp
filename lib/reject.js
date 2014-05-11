var path = require("path");
function reject(request, response, next){
	if (path.extname(request.url) == ".jade"){
		response.statusCode = 404;
		res.end();
	} else {
		next();
	}
}

module.exports = reject;

