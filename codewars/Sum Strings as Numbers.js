function sumStrings(a,b) { 
	if(a.length>b.length){
		var length=a.length;
		b=Array(a.length-b.length+1).join('0')+b;
	}else{
		var length=b.length;
		a=Array(b.length-a.length+1).join('0')+a;
	}
	var reversea=a.split("").reverse().join("");
	var reverseb=b.split("").reverse().join("");
	var result=[0];
	for(var i=0;i<a.length;i++){
		var sum=+reversea[i]+ +reverseb[i]+result[i];
		result[i]=sum%10;
		result.push(Math.floor(sum/10));
	}
	while(result[result.length-1]===0){
		result.pop();
	}
	return result.reverse().join('');

}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')==='712577413488402631964821329');