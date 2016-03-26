//validate

$("#form").validate({
	rules:{
		n1:{
			required:true,
			minlength:5,
			email:true,
			equalTo:("#password")
		},
		n2:{

		}
	},
	message:{
		required:"mes1",
		minlength:"mes2",
		email:"mes3",
	}
	errplacement:function(error ,ele){error.appendTo(ele)};
})


//cookie
$.cookie(cookieName,cookieValue,{
	path:"/",
	expires:4,
	domain:"",
	secure:true,
})


//lightBox
$("a").lightBox({
	overlayBgColor:"#eee",
	overlayOpacity:0.5,
	fixedNavigation:false,
	containerBorderSize:2px,
	containerResizeSpeed:500,
});
<ul>
	<li><a href="a.jpg"><img scr="b.jpg" alt="p"></a></li>
</ul>

//contextMenu


$("#a").contextMenu("#meun",{
	bindings:{
		"li1":function(item){},
		"li2":function(item){},
	}
});
<div id="a"> </div>

<ul id="#menu">
	<li id="li1">item1<li>
	<li id="li2">item2<li>
<ul>




//jqzoom

$("#jq").jqzoom({
	zoomWidth:200,
	zoomHeight:200
})

<a id="jq" href="big.jpg" title=""><img scr="small.jpg" alt=""></a>

//自定义插件
(function($){
	$.fn.extend("funName",function(params){ return $(this);});
})(jQuery);