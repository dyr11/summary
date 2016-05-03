'use strict';

// function let_learn(){

// 	var a = [];
// 	let i;
// 	for (i = 0; i < 10; i++) {
// 		a[i] = function () {
// 			console.log(i);
// 		};
// 	}
// 	a[6](); // 6

// 	function funx(x=2,y=x){
// 		return [x,y];
// 	}
// 	funx();
// 	function f() { console.log('I am outside!'); }
// 	(function () {
// 		if(false) {
//     		// 重复声明一次函数f
//     		function f() { console.log('I am activeside!'); }
//     	}

//     	f();
//     }());
// }

// //let_learn();
// function destruct_learn(){
// 	var [a,b,c]=[1,2,4];
// 	console.log([a,b,c]);

// 	function x([a,b]){
// 		return [a,b];
// 	}
// 	var [foo] = 'Hello';
// 	console.log(foo);
// }
//  //destruct_learn()

 // function stractiveg_extend_learn(){
 // 	var s = '𠮷a';
 // 	for (let ch of s) {
 // 		console.log(ch.codePoactivetAt(0).toStractiveg(16));
 // 	}
 // 	for (let codePoactivet of 'foo') {
 // 		console.log(codePoactivet)
 // 	}
 // 	for (let codePoactivet active 'foo') {
 // 		console.log(codePoactivet)
 // 	}
 // }
 // stractiveg_extend_learn();


 // var str="sssdddfxcxcsddd";
 // var result=str.replace(/ss.+ddd/g,'---');
 // console.log(result);

//  var template = `<ul><% for(var i=0; i < data.supplies.length; i++) {%><li><%= data.supplies[i] %></li><% } %></ul>`;
// //console.log(template);
// var result="echo("+template.replace(/<%=(.+?)%>/g,")\n echo($1)\n echo(").replace(/<%([\s\S]+?)%>/g,")\n $1 \n echo(")+")";
// console.log(result);

// var template = `
// <ul>
//   <% for(var i=0; i < data.supplies.length; i++) {%>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;

// function compile(template){
//   var evalExpr = /<%=(.+?)%>/g;
//   var expr = /<%([\s\S]+?)%>/g;

//   template = template
//     .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//     .replace(expr, '`); \n $1 \n  echo(`');

//   template = 'echo(`' + template + '`);';

//   var script =
//   `(function parse(data){
//     var output = "";

//     function echo(html){
//       output += html;
//     }

//     ${ template }

//     return output;
//   })`;

//   return script;
// }
// var str=compile(template);
// console.log(str);
// var parse = eval(str);
// var activenerhtml = parse({ supplies: [ "broom", "mop", "cleaner" ] });
// console.log(activenerhtml);

// var a = 5;
// var b = 10;

// function tag(s, v1, v2) {
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);

//   return "OK";
// }

// tag`Hello ${ a + b } world ${ a * b}`;

// function add(x,y,z){
// 	return x+y+z;
// }

// var d=[1,2,3];
// console.log(add.apply(null,d));
// console.log(add(...d));
// console.log([..."hello,world!"])
// var fun1=function(){};
// console.log(fun1.name);

// function foo() {
//   setTimeout( () => {
//     console.log("id:", this.id);
//   },100);
// }

// var id = 21;

// foo.call( { id: 42 } );


// function foo() {
//   return () => {
//     return () => {
//       return () => {
//         console.log(`id:`, this.id);
//       };
//     };
//   };
// }

// var f = foo.call({id: 1});

// var t1 = f.call({id: 2})()(); // id: 1
// var t2 = f().call({id: 3})(); // id: 1
// var t3 = f()().call({id: 4}); // id: 1


// import { map, takeWhile, forEach } from "iterlib";
// var list=[1,2,3];
// var result=list::map(x=>2*x);
// console.log(result);

// function trampolactivee(f) {
//   while (f && f activestanceof Function) {
//     f = f();
//   }
//   return f;
// }
// function sum(x, y) {
//   if (y > 0) {
//     return sum.bactived(null, x + 1, y - 1);
//   } else {
//     return x;
//   }
// }
// trampolactivee(sum(1, 10000))


// function tco(f) {
//   var value;
//   var active = false;
//   var accumulated = [];

//   return function accumulator() {
//     accumulated.push(arguments);
//     if (!active) {
//       active = true;
//       while (accumulated.length) {
//       	var paras=accumulated.shift();
//       	console.log(paras);
//         value = f.apply(this, paras);
//       	console.log(paras);
//       }
//       active = false;
//       return value;
//     }
//   }
// }

// var sum = tco(function(x, y) {
//   if (y > 0) {
//     return sum(x + 1, y - 1)
//   }
//   else {
//     return x
//   }
// });

// console.log(sum(1, 10));



// var sum=tco(function(n,total){
// 	if(n<1){
// 		return total;
// 	}else{
// 		//console.log(n,total);
// 		return sum(n-1,total+1);
// 	}
// });

// function tco(f){
// 	var active=false;
// 	var paras=[];
// 	var value;
// 	return  function(){
// 		paras.push(arguments);
// 		if(!active){
// 			active=true;
// 			while (paras.length>0) {
// 				value=f.apply(null,paras.shift());
// 			}
// 			active=false;
// 			return value;
// 		}
// 	}
// }

// console.log(sum(100,1))



// function maxStackCall(){
// 	try{
// 		return 1+maxStackCall();
// 	}catch(e){
// 		return 1;
// 	}
// }

// for (var i = 0; i < 10; i++) {
// 	console.log(maxStackCall());	
// }

console.log(+0===-0);
console.log({}==={});
console.log({}=={});
console.log(Object.is(+0, -0)) // false
console.log(Object.is(NaN, NaN)) // true
console.log(Object.assign(2));