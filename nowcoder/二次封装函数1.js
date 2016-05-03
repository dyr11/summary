function partialUsingArguments(fn) {
	var firstArgu=Array.prototype.slice.call(arguments,1);
	return function(str3){
		var total=firstArgu.concat(Array.prototype.slice.call(arguments));
		return fn.apply(null,total);
	}
}
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var test = function(first, second, third, forth) {
    return first + second + third + forth; };
var result=partialUsingArguments(test, a, b)(c, d);
console.log(result===10)