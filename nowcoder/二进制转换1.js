// 题目描述

// 给定二进制字符串，将其换算成对应的十进制数字 
function base10(str) {
	return Array.prototype.reduce.call(str,function(a,b){
		return a*2+ +b;
	},0);
}
var result=base10('11000000')
console.log(result);
console.log(result===192);
console.log(parseInt('11000000',2)===192);