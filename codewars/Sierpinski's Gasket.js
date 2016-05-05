// Write a function that takes an integer n and returns the nth iteration of the fractal known as Sierpinski's Gasket.

// Here are the first few iterations. The fractal is composed entirely of L
//  and white-space characters; each character has one space between it and the next (or a newline).

function sierpinski(n) {
	function inner(n){
		if(n<=0){
			return [['L']];
		}
		var base=inner(n-1);
		var length=base.length;
		var width=base[length-1].length;
		for (var i = 0; i < length; i++){
			var line=base[i];
			var newLine=[];
			var d=width+base[i].length;
			for(var x=0;x<d;x++){
				newLine.push(" ");
			}
			for (var j = 0; j < line.length; j++) {
				newLine[j]=line[j];
				newLine[width+j]=line[j]; 
			}
			base.push(newLine);
		}
		return base;
	}
	var result=inner(n);
	return result.map(function(item){
		return item.join(" ");
	}).join('\n');
}

var level2 = [
    'L',
    'L L',
    'L   L',
    'L L L L'
].join('\n');
var level3 = [
    'L',
    'L L',
    'L   L',
    'L L L L',
    'L       L',
    'L L     L L',
    'L   L   L   L',
    'L L L L L L L L'
].join('\n');
var result=sierpinski(3);
console.log(result===level3);
