1.选择速度 ID >Tag>class;
2.使用jQuery缓存。var d=$("#id");
3.使用jQuery上下文 $("#id","content");
4.处理不规范的元素
 <div id="[e]"></div>
  $("#\\[e\\]");
5.优化时间冒泡 stopPropagation();preventDefault();
6.使用data方法缓存全局数据。
 $("id").data("name");
 $("id").data("name","value");
 $("id").removeData("name");
 7.jQuery解决库冲突 var d=jQuery.noConflict();
  使用d代替$;
 8.使用子查询进行缓存
9.减少对dom的直接操作。
10.jQuery和dom对象的转化
jQuery=>Dom : $("#class").get(index) | $("#class")[index];
Dom=>jQuery :$(DOM);
