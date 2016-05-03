var http=require("http");
var basePath="C:\\Users\\dyr\\AppData\\Roaming\\npm\\node_modules\\";
var cheerio=require(basePath+"cheerio");
//var Promise=require(basePath+"bluebird");



var url1="http://www.imooc.com/learn/348";
var url2="http://www.imooc.com/learn/259";
//getPage(url).then(parseHtml);

var s=[getPage(url1),getPage(url2)];
Promise.all(s).then(function(data){
	parseHtml(data);
	// console.log('hhhe')
	//console.log(data)
});
function getPage(url){
	return new Promise(function(resolve,rejiect){
		http.get(url,function(res){
			var html="";
			res.on("data",function(data){
				html+=data;
			})
			res.on("end",function(){
				resolve(html);
			})
		}).on("error",function(){
			console.log("error !");
		})

	})
}




function parseHtml(data){
	data.forEach( function(data, index) {
		// statements

		var html=cheerio.load(data);
		var chapters=html(".mod-chapters").find(".chapter");
	//console.log(chapters)
	chapters.each(function(){
		var chapter=html(this);
		var title=chapter.find("strong").text();
		console.log(title);
		var videos=chapter.find(".video li a");
		videos.each(function(){
			var videoInfo=html(this);
			var videoId=videoInfo.attr("href").split("/")[2];
			console.log("   "+videoId+":"+videoInfo.text().replace(/\s*$/,""));
		})
	})
});
}