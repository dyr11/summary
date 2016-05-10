var Test=require("./Test");
// Next bigger number with the same digits
// You have to create a function that takes a positive integer number
//  and returns the next bigger number formed by the same digits:
function nextBigger(n){
	var numArray=n.toString(10).split('');
	for(var i=numArray.length-2;i>=0;i--){
		var index=-1;
		var temp=numArray[i];
		for(var j=i+1;j<numArray.length;j++){
			if(numArray[j]>temp){
				if(index===-1){
					index=j;
				}else if(numArray[j]<numArray[index]){
					index=j;
				}
			}
		}
		if(index!==-1){
			var temp=numArray[i];
			numArray[i]=numArray[index];
			numArray[index]=temp;
			return +numArray.slice(0,i+1).concat(numArray.slice(i+1).sort(function(a,b){return a-b;})).join('');
		}
	}
	return -1;
}
Test.assertEquals(nextBigger(12),21)
Test.assertEquals(nextBigger(513),531)
Test.assertEquals(nextBigger(2017),2071)
Test.assertEquals(nextBigger(414),441)
Test.assertEquals(nextBigger(144),414)