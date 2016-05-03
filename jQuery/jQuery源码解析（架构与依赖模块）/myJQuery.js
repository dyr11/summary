(function(global){
	var jquery=function(ele,context){
			//console.log(this);
			console.log("jquery");
			return new jquery.fn.init(ele,context);
		}
		jquery.fn=jquery.prototype={
			init:function(ele,context){
				console.log("init!");
				console.log(this instanceof jquery);
				if (ele==null) {ele={}};
				if(typeof ele==="string"){
					var results=global.querySelectorAll(ele,context);
					for (var i = 0; i < results.length; i++) {
						this[i]=results[i];
					}
					this.context=document;
					this.length=results.length;
				}else if(ele.nodeType){
					this.context=this[0]=ele;
					this.length=1;
				}
				return this;
			},
			constructor:jquery,
			pushStack:function(ele){
				//将dom对象封装成jquery对象，并将dom数组复制到jquery对象中
				var ret=jquery.merge(this.constructor(),ele);
				ret.prevObject=this;
				ret.context=this.context;
			}
		}
		init=jquery.fn.init;
		init.prototype=jquery.fn;

		jquery.fn.test=function(){
			console.log("jquery's function");
		}

		//在给定的context中选择子元素。
		jquery.fn.find=function(selector){
			var dom=[];//获得dom的方法
			for (var i = 0; i < this.length; i++) {
				dom.push(this[i].querySelectorAll(selectors));
			}
			var ret=this.pushStack(dom);//包装成jquery对象
			ret.selector=this.selector?this.selector+" "+selector:selector;
			return ret;
		}

		//找到第num个董节点
		//num==null时返回全部对象。
		jquery.fn.get=function(num){
			if(num==null){
				Array.slice.call(this);
			}else if(num>0){
				return this[num];
			}else{
				return this[this.length+num];
			}
		}
		jquery.fn.eq=function(num){
			var dom=this.get(num);
			var ret=this.pushStack(dom);
			ret.selector=this.selector+":eq("+num+")";
			return ret;
		}
		jquery.fn.first=function(){
			return this.eq(0);
		}
		jquery.fn.last=function(){
			return this.eq(-1);
		}

		jquery.fn.slice=function(start,end){
			return this.pushStack(Array.slice.call(this,start,end));
		}

		//jquery迭代器
		jquery.fn.each=function(callback,args){
			jquery.each(this,callback,args);
		}

		//迭代器，根据args选择用for遍历数组，for in遍历对象。
		jquery.each=function(obj,callback,args){
			if(args){
				for (var i = 0; i < obj.length; i++) {
					var result=callback(obj[i],args);
					if(result===false){
						break;
					}
				}
			}else{
				for(var s in obj){
					var result=callback(obj[s],args);
					if(result===false){
						return false;
					}
				}
			}
		}

		//first和second是类数组（array-like）；
		//加second中的值加到first的末尾。
		jquery.merge=function(first,second){
			var i=first.length;
			var j=second.length;
			for(var k=0;k<j;k++){
				first[i+k]=second[k];
			}
			first.length=i+j;
			return first;
		}

		//扩展函数
		jquery.extend=jquery.fn.extend=function(){
			var target=arguments[0]||{};
			var i=1;
			//只是一个参数时将参数扩展到this上，负责将其余参数扩展到第一参数上
			if(arguments.length==1){
				target=this;
				i=0;
			}
			for (var i = 0; i < arguments.length; i++) {
				var copy=arguments[i];
				for(var name in copy){
					target[name]=copy[name];
				}
			}
			return target;
		}

		//返回上一次的对象（上下文）；
		//没有上一次对象则返回一个新jquery对象。
		jquery.fn.end=function(){
			return this.prevObject?this.prevObject:new this.constructor();
		}

		//多库冲突解决
		_$=global.$;
		_jquery=global.jquery;

		jquery.noConflict=function(deep){
			if(global.$=jquery){
				global.$=_$;
			}
			if(deep&&global.jquery===jquery){
				global.jquery=_jquery;
				return jquery;
			}
		}
		
		//
		global.jquery=global.$=jquery;
	})(global);


	var d=$();
	console.log(d instanceof jquery)
	console.log(jquery.prototype===d.__proto__);
	console.log(jquery.prototype===d.__proto__.init.prototype);
	console.log(jquery.prototype===d.__proto__.init.prototype.init.prototype);
	d.test();
