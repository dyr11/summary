var express=require('express');
var morgan=require('morgan');
var cookieParser=require('cookie-parser');

var app=express();
app.use(morgan('dev'));
app.use(cookieParser("12345575685768786543"));
app.use(function(req,res,next){
	if(req.signedCookies.username){
		if(req.signedCookies.username==='password'){
			next();
		}else{
			var error=new Error('wrong cookies!');
			error.status=401;
			next(error);
		}
	}else{
		if(req.headers.authorization){
			var auth=new Buffer(req.headers.authorization.split(' ')[1],'base64').toString().split(':');
			var username=auth[0];
			var password=auth[1];
			if(username==='username'&&password==='password'){
				res.cookie('username','password',{signed:true});
				next();
			}else{
				var error=new Error('wrong username or password!');
				error.status=401;
				next(error);
			}
		}else{
			var error=new Error('no authorization!');
			error.status=401;
			next(error);
		}
	}
});

app.use(function(error,req,res,next){
	res.writeHeader(error.status||500,{'Content-Type':'text/html','WWW-Authenticate':'Basic'});
	res.end(error.message);
});
app.use(function(req,res,next){
	res.writeHeader(200,{'Content-Type':'text/html'});
	res.end("hello world !");
});


app.listen(80,'localhost',function(){
	console.log('server start!');
})
