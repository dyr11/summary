var http=require("http");
var server=http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html","charset":"UTF-8"});
	res.write('<head><meta charset="utf-8"/></head>');
	res.end("hello world哈哈");
	console.log("res!哈哈");
});
server.listen(1115);