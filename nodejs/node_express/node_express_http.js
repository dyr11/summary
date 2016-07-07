var express =require('express');
var http =require('http');
var morgan = require('morgan');
var parser=require('body-parser');
var app=express();
//-------------------------------------------------------------
// app.use(function(req,res,next){
// 	res.writeHeader(200,{"Content-Type":"text/html"});
// 	res.end("<h1>hello world</h1>");
// });

// var server=http.createServer(app);
// server.listen(80,"localhost",function(){
	// 	console.log("server start !");
// })
var test="test-server";
var router=express.Router();
router.use(parser.json());
router.route('/')
.all(function(req,res,next){
	res.writeHeader(200,{"Content-Type":"text/html"});
	next();
}).
get(function(req,res,next){
	res.end("get dishes!");
})
.post(function(req,res,next){
	res.end("post dishes");
})
.put(function(req,res,next){
	res.end("put dishes");
})
.delete(function(req,res,next){
	res.end("delete dishes");
});

router.route('/:id')
.get(function(req,res,next){
	res.end("get dishes:"+req.params.id);
})
.post(function(req,res,next){
	res.end("post dishes:"+req.params.id);
});

app.use(morgan('dev'));

app.use('/dishes',router);



app.use(express.static(__dirname +"/public"));
app.listen(80,"localhost",function(){
	console.log(`server ${test} start !`);
});
