//[]代表可选。
$("#id").attr({k:V,K1:V1});
$("#id").attr(key,function(index){});
$("#id").removeAttr(key);
$("#id").html([value]);
$("#id").text([value]);
$("select").val().join(',');
$("#id").css(key,value);
$("#id").css({K1:V1.K2:V2});
$("#id").addClass("class1 class2");
$("#id").removeClass("class");
$("#id").removeClass()//remove all class of id 
$("#id").toggleClass("class");
$("#id").append(child);
$("#id").append(function(index,html){})//html :old value of id;
$("#id").appendTo(parent);
$("#id").prepend(child)//first child
$("#id").prepend(parent)
$("#id").after(node);
$("#id").before(node);
$("#id").clone()//只复制元素 
$("#id").clone(true)//复制元素加行为
$("#id").replaceWith();
$("#id").replaceAll();
$("#id").wrap([node|html]);//包裹id
$("#id").unwrap()//删除父容器
$("#id").wrapInner([function|html|node]);
$("#id").each(function(index){});
$("#id").remove([text]);//删除自身或选择的元素
$("#id").empty();
$("#id")
$("#id")
$("#id")
$("#id")
$("#id")
$("#id")