var jade = require("jade");
var path = require("path");
var fs = require("fs");

function makeJade(root) {
	return function(req, res, next){
		if (".html" == path.extname(req.url)){
			var jade_path = path.join(root, path.basename(req.url, ".html") + ".jade");
			if (fs.existsSync(jade_path)){
				//read jade file
				fs.readFile(jade_path, function(err, data){
					if (err) throw err;
					//transplan jade to html
					jade.render(data, {}, function(err, html){
						if (err) throw err;
						res.statusCode = 200;
						res.setHeader("Content-Type", "text/html; charset=UTF-8");
						res.setHeader("Content-Length", html.length);
						res.end(html);
					})
				});
			} else {
				//can't find jade file
				res.statusCode = 404;
				res.end();
			}
		} else {
			next();
		}
	}	
}

module.exports = makeJade;
