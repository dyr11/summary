// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。 
function convertToBinary(num) {
	var result=[];
	while(num>0){
		result.push(num%2);
		num=Math.floor(num/2);
	}
	if(result.length<8){
		result.push(0);
	}
	return result.reverse().join('');
}
var result=convertToBinary(65);
console.log(result);
console.log(result==='01000001');