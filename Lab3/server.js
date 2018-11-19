const http = require("http");
const fs = require('fs');

const htmlFile = fs.readFileSync('index.html', 'utf8');
const stylesheet = fs.readFileSync('styles.css', 'utf8');
const scriptFile = fs.readFileSync('script.js', 'utf8');
const server = http.createServer();

server.on('request', (req, res) => {
	//console.log(req.url)
	switch(req.url)
	{
		case '/':
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(htmlFile);
		case '/styles.css':
			res.writeHead(200, {'Content-Type':'text/css'});
			res.end(stylesheet);
		case '/script.js':
			res.writeHead(200, {'Content-Type':'text/javascript'});
			res.end(scriptFile);
		case '/pushHint':
			{	
				res.writeHead(200, {'Content-Type':'text/plain'});					
				req.on('data', function(chunk) {
						var h=chunk.toString();
						h = h.substr(h.indexOf('=')+1)+"\n";
						fs.appendFileSync("hintList.txt", h,  'utf8')

						//console.log(h);
					});
				/*req.on('end', function() {
					console.log(data);
					res.write('success');
					res.end();
				});*/
				res.end();
			}
		case '/hintList.txt':
			res.writeHead(200, {'Content-Type':'text/plaint'});
			res.end(fs.readFileSync('hintList.txt', 'utf8'));
		default:
			res.writeHead(404, {'Content-Type':'text/plain'});
			res.end("lost");
	}
	
	
});
server.listen(3000, () => console.log("on"));