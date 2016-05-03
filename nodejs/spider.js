var http=require("http");
var basePath="C:\\Users\\dyr\\AppData\\Roaming\\npm\\node_modules\\";
var cheerio=require(basePath+"cheerio");
http.get("http://www.imooc.com/learn/348",function(res){
	var html="";
	res.on("data",function(data){
		html+=data;
	})
	res.on("end",function(){
		parseHtml(html);
	})
}).on("error",function(){
	console.log("error !");
})

function parseHtml(data){
	var html=cheerio.load(data);
	var chapters=html(".mod-chapters").find(".chapter");
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
}