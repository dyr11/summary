var buf=new Buffer("hello");
console.log(buf);
var buf=new Buffer(10);
console.log(buf);
var buf=new Buffer(10,"base64");
console.log(buf);
buf.write("sadasdad");//覆盖之前的数据；当长度超出时，会截断；
console.log(buf);
// source.copy(target,target_start,source_start,source_end);

var fs=require("fs");
var readstream=fs.createReadStream("commonjs规范.jpg");
var writeStream=fs.createWriteStream("copy.jpg");
readstream.on("data",function(thunk){
	if(writeStream.write(thunk)===false){
		readstream.pause();
	}
});
readstream.on("end",function(){
	console.log("readstream end!");
});
writeStream.on("drain",function(){
	readstream.resume();
})


readstream.pipe(writeStream);


