var stream=require("stream");
var util=require("util");

function read(){
	stream.Readable.call(this);
}
util.inherits(read,stream.Readable);
read.prototype._read=function(){
	this.push("hello");
	this.push("world");
	this.push(null);
}

function write(){
	stream.Writable.call(this);
	this._cache=new Buffer("");
}
util.inherits(write,stream.Writable);
write.prototype._write=function(thunk,encode,callback){
	console.log(thunk.toString());
	callback();
}

function transform(){
	stream.Transform.call(this);
}
util.inherits(transform,stream.Transform);

transform.prototype._transform=function(thunk,encode,callback){
	this.push(thunk);
	callback();
}
transform.prototype._flush=function(callback){
	this.push("flush");
	callback();
}

var r=new read();
var w=new write();
var t=new transform();
r.pipe(t).pipe(w);