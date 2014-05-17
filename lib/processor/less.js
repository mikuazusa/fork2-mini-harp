var less = require("less");
var path = require("path");
var fs = require("fs");

function makeLess(root) {
	return function(req, res, next){
		if (path.extname(req.url) == ".css"){
			var less_path = path.join(root, path.basename(req.url, ".css") + ".less");
			if (fs.existsSync(less_path)){
				//read less file
				fs.readFile(less_path, function(err, data){
					if (err) throw err;
					//transplan less to css
					less.render(data.toString(), function(err, css){
						if (err) throw err;
						res.statusCode = 200;
						res.setHeader("Content-Type", "text/css; charset=UTF-8");
						res.setHeader("Content-Length", css.length);
						res.end(css);
					})
				});
			} else {
				//can't find css file
				res.statusCode = 404;
				res.end();
			}
		} else {
			next();
		}
	}	
}

module.exports = makeLess;
