var express=require('express');
var morgan =require('morgan');
var app=express();
app.use(morgan('dev'));
app.use(function(req,res,next){
	var authorization=req.headers.authorization;
	if(authorization){
		var auth=new Buffer(authorization.split(' ')[1],'base64').toString().split(':');
		var username=auth[0];
		var password=auth[1];
		if(username==='username'&&password==='password'){
			next();
		}else{
			var error=new Error("wrong username or password!");
			error.status=401;
			next(error);
		}
	}else{
		var error=new Error("no authorization header !");
		error.status=401;
		next(error);
	}
});
app.listen(80,'localhost',function(){
	console.log('service start !');
})

app.use(express.static(__dirname+'/public'));
app.use(function(error,req,res,next){
	res.writeHead(error.status||500,{'Context-Type':'text/plain','WWW-Authenticate':'Basic'});
	console.log("error print!");
	res.end(error.message);
})