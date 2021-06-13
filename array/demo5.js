// Array 会改变自身的方法 9 个
// pop、push、reverse、shift、sort、splice、unshift、  fill

// pop 方法
var array = ["cat", "dog", "cow", "chicked", "mouse"];
var item = array.pop();
console.log(array); // [ 'cat', 'dog', 'cow', 'chicked' ]
console.log(item); // mouse

// push 方法
var array = ["football", "basketball", "badminton"];
var i = array.push("golfball");
console.log(array); // ["football", "basketball", "badminton", "golfball"];
console.log(i); // 4

// reverse 方法
var array = [1, 2, 3, 4, 5];
var array2 = array.reverse();
console.log(array); // [ 5, 4, 3, 2, 1 ]
console.log(array2 === array); // true

// shift 方法
var array = [1, 2, 3, 4, 5];
var item = array.shift();
console.log(array); // [ 2, 3, 4, 5 ]
console.log(item); // 1

// unshift 方法
var array = ["red", "green", "blue"];
var length = array.unshift("yellow");
console.log(array); // ["yellow", "red", "green", "blue"];
console.log(length); // 4

// sort 方法
var array = ["apple", "Boy", "Cat", "dog"];
var array2 = array.sort();
console.log(array); // [ 'Boy', 'Cat', 'apple', 'dog' ]
console.log(array2 == array); // true

// splice 方法
var array = ["apple", "boy"];
var splices = array.splice(1, 1);
console.log(array); // [ 'apple' ]
console.log(splices); // [ 'boy' ]

// copyWithin 方法
var array = [1, 2, 3, 4, 5];
var array2 = array.copyWithin(0, 3);
console.log(array === array2, array2); // true true [ 4, 5, 3, 4, 5 ]

// fill 方法
var array = [1, 2, 3, 4, 4];
var array2 = array.fill(10, 0, 3);
console.log(array === array2, array2); // true [ 10, 10, 10, 4, 4 ] 可见区间 [0,3] 的元素全部替换为 10
