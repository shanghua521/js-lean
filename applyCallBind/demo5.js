// obj 借用数组的方法
var arrayLike = {
  0: "java",
  1: "script",
  length: 2,
};

Array.prototype.push.call(arrayLike, "jack", "lily");
console.log(typeof arrayLike); // 'object'
console.log(arrayLike); // { '0': 'java', '1': 'script', '2': 'jack', '3': 'lily', length: 4 }

// 数组借用 Math 的方法
let arr = [13, 6, 10, 11, 16];
const max = Math.max.apply(Math, arr);
const min = Math.min.apply(Math, arr);
console.log(Math.max(...arr));
console.log(max);
console.log(min);

// call 继承 see /js-lean/extends/demo6.js
