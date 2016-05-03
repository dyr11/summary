// Simple Pig Latin

// Move the first letter of each word to the end of it, 
// then add 'ay' to the end of the word.
function pigIt(str){
  return str.split(" ").map(function(item){
  	return item.slice(1)+item[0]+'ay';
  }).join(' ');
}

console.log(pigIt('Pig latin is cool')==="igPay atinlay siay oolcay");