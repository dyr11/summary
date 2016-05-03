// 题目描述

// 将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值 
function alterContext(fn, obj) {
	return fn.call(obj);
}
var result=alterContext(function() {
    return this.greeting + ', ' + this.name + '!';
}, { name: 'Rebecca', greeting: 'Yo' })
console.log(result==='Yo, Rebecca!');