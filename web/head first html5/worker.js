onmessage=function(){
	var message=Math.round(Math.random()*1000);
	postMessage(message);
}
