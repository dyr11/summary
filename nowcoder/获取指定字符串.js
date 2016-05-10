// 题目描述

// 给定字符串 str，检查其是否包含 3 个连续的数字
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false 
function captureThreeNumbers(str) {
	var result=str.match(/\d{3}/);
	if(result){
		return result[0];
	}else{
		return false;
	}
}
var result=captureThreeNumbers('9876543');
console.log(result==="987");