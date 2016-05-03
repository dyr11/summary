"use strict";

// console.log('hello world!');
var list = [1, 2, 34, 5, 6, 7, 89, 11, 224, 5464];
var new_list = list.map(function (item) {
  return item + 1;
});
console.log(new_list);