// 题目描述

// 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 1、返回数组，格式为 key: value
// 2、结果数组不要求顺序
function iterate(obj) {
	var result=[];
	var attrs=Object.getOwnPropertyNames(obj);
	for (var i = 0; i < attrs.length; i++) {
		result.push(attrs[i]+": "+obj[attrs[i]]);
	}
	return result;
}
var C = function() { this.foo = 'bar';
    this.baz = 'bim'; };
C.prototype.bop = 'bip';
var result=iterate(new C());
console.log(result);
console.log(result===["foo: bar", "baz: bim"]);
