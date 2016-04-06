# jquery
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
				return this;
			},
			constructor:jquery
		}
		jquery.fn.test=function(){
			console.log("jquery's function");
		}
		init=jquery.fn.init;
		init.prototype=jquery.fn;

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

		global.jquery=global.$=jquery;
	})(global);


	var d=$();
	console.log(d instanceof jquery)
	d.test();

