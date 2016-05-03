//ajax=asynchronous javascript and xml
var xhr=null;
if(window.ActiveXObject){
	xhr=new ActiveXObject("Microsoft.HTTPXML");
}else{
	xhr=new XMLHttpRequest();
}

xhr.open("GET","URL",true);
xhr.onrreadystatechange=function(){
	if(xhr.readyState==4&&xhr.status==200){
		xhr.responseText();
	}
}
xhr.send(null);


$.load(url,[date],callback);

$.getJSON("url",[date],function(date){});
$.getScript("url",[callback]);
$.get("url",[data],[callbcak],[type]);

$.get("a.xml",function(data){
	var b=date.find("key");
	$.each(b,function(inb){
		$("#id").empty().html(inb.find("subkey").text());
	})
});
$.post("url",$("#forminfo").serialize(),[callbcak],[type]);
encodeURI();
encodeURIComponent();
decodeURI();
decodeComponent();
$.ajax({
	url:"a.html",
	data:{key/value},
	dateType:"html",
	success:function(date){},
	error:function(xhr){}
});
$.ajaxSetup({

	url:"a.html",
	data:{key/value},
	dateType:"html",
});
$.ajaxStart();
$.ajaxStop();
$.ajaxSuccess();
$.ajaxError();
$.ajaxComplete();
$.ajaxSend();