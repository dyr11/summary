'use strict';

function let_learn(){

	var a = [];
	let i;
	for (i = 0; i < 10; i++) {
		a[i] = function () {
			console.log(i);
		};
	}
	a[6](); // 6
		function funx(x=2,y=x){
		return [x,y];
	}
	funx();
}
var x=y=>y+1;

let_learn();