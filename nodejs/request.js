var http=require("http");
var querystring=require("querystring");
var data={
	v:"v1",
	y:"v2"
};
var req=http.request(
{
	"Content-Type":"application/x-www-form-urlencoded",
	"Content-Length":data.length,
	"connection":"keep-alive"
},function(res){
	res.statusCode;
	res.headers;
	res.on("data",function(data){

	});
	res.on("end",function(){

	});
	res.on("error",function(e){
		e.message;
	});

});

req.write(data);
req.end();