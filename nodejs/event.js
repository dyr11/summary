var eventEmitter=require("events").EventEmitter;
var event=new eventEmitter();
function da(data){
	console.log(data+(new Date()));
}
event.on("hello",da);
event.setMaxListeners(3);
event.emit("hello","what");
event.removeListener("hello",da);
event.removeAllListeners(["hello"]);
var count=EventEmitter.listenerCount(event,"hello");

