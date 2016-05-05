// Create a function that transforms any positive number
//  to a string representing the number in words. The function should work for all numbers between 0 and 999999.
function number2words(n){
  // works for numbers between 0 and 999999  
  function inner(n){
  	var part1=Math.floor(n/1000);
  	var part2=n%1000;
  	var table1=['zero','one','two','three','four','five','six','seven','eight','nine','ten',
  	'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
  	var table2=[,,'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  	if(part1>0&&part2===0){
  		return inner(part1)+' thousand';
  	}
  	if(part1>0){
  		return inner(part1)+' thousand '+inner(part2);
  	}
  	var hundred=Math.floor(part2/100);
  	if(hundred>0&&part2%100===0){
  		return table1[hundred]+" "+"hundred";
  	}
  	if(hundred>0){
  		return table1[hundred]+" "+"hundred"+" "+inner(part2%100);
  	}
  	var rest=part2%100;
  	if(rest===0){
  		return "";
  	}
  	if(rest<=20){
  		return table1[rest];
  	}
  	if(rest%10===0){
  		return table2[rest/10];
  	}
  	return table2[Math.floor(rest/10)]+"-"+table1[rest%10];
  }
  var result=inner(n);
  if(result===''){
  	return 'zero';
  }
  return result;
}

var Test=function(){

}
Test.assertEquals=function(a,b){
	console.log(a===b,a,b);
}
Test.assertEquals(number2words(0),"zero");
Test.assertEquals(number2words(1),"one");
Test.assertEquals(number2words(8),"eight");
Test.assertEquals(number2words(10),"ten");
Test.assertEquals(number2words(19),"nineteen");
Test.assertEquals(number2words(20),"twenty");
Test.assertEquals(number2words(22),"twenty-two");
Test.assertEquals(number2words(54),"fifty-four");
Test.assertEquals(number2words(80),"eighty");
Test.assertEquals(number2words(98),"ninety-eight");
Test.assertEquals(number2words(100),"one hundred");
Test.assertEquals(number2words(301),"three hundred one");
Test.assertEquals(number2words(793),"seven hundred ninety-three");
Test.assertEquals(number2words(800),"eight hundred");
Test.assertEquals(number2words(650),"six hundred fifty");
Test.assertEquals(number2words(1000),"one thousand");
Test.assertEquals(number2words(1003),"one thousand three");
