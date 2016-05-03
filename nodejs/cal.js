function add(sum){
	 function innerAdd(num){
		sum+=num;
		return innerAdd;
	}
	innerAdd.toString=innerAdd.valueOf=function(){
		return sum;
	}
	return innerAdd;
}

console.log(add(2)(3)(4)(5)(6)+0);