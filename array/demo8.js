// 数组遍历方法
// forEach、every、some、filter、map、reduce、reduceRight
// ES6 新增方法 entries、find、findndex、keys、values

// forEach
var array = [1, 3, 5];
var obj = { name: "cc" };
var sReturn = array.forEach(function (value, index, array) {
  array[index] = value;
  console.log(this.name); // cc 被打印三次，this 指向 obj
}, obj);
console.log(array); // [1,3,5]
console.log(sReturn); // undefined,可见返回值为 undefined

// every 方法
var o = { 0: 10, 1: 8, 2: 25, length: 3 };
var bool = Array.prototype.every.call(
  o,
  function (value, index, obj) {
    return value >= 8;
  },
  o,
);
console.log(bool); // true

// some 方法
var array = [18, 9, 10, 35, 80];
var isExist = array.some(function (value, index, array) {
  return value > 20;
});

console.log(isExist); // true

// map 方法
var array = [18, 9, 10, 35, 80];
var array = array.map((item) => item + 1);
console.log(array);

// filter 方法
var array = [18, 9, 10, 35, 80];
var array = array.filter(function (value, index, array) {
  return value > 20;
});
console.log(array); // [35, 80];

// reduce 方法
var array = [1, 2, 3, 4];
var s = array.reduce(function (previosValue, value, index, array) {
  return previosValue * value;
}, 1);
console.log(s); // 24

// ES6 写法
var s = array.reduce((p, v) => p * v);
console.log(s); // 24

// reduceRight 方法 (和 reduce 的区别就是从后往前累计)
var array = [1, 2, 3, 4];
var s = array.reduceRight((p, v) => p * v); // 24
console.log(s); // 24

// entries 方法
var array = ["a", "b", "c"];
var iterator = array.entries();
console.log(iterator.next().value); // [0, "a"];
console.log(iterator.next().value); // [1, "b"];
console.log(iterator.next().value); // [2, "c"];
console.log(iterator.next().value); // undefined,迭代器处于数组尾部时，再迭代就会返回 undefined

// find & findIndex
var array = [1, 3, 5, 7, 8, 9, 10];
function f(value, index, array) {
  return value % 2 === 0; // 返回偶数
}

function f2(value, index, array) {
  return value > 20; // 返回大于 20
}

console.log(array.find(f)); // 8
console.log(array.find(f2)); // undefined
console.log(array.findIndex(f)); // 4
console.log(array.findIndex(f2)); // -1

// keys 方法
var array = [...Array(10).keys()]; // [0,1,2,3,4,5,6,7,8,9]
console.log(array);
[...new Array(10).keys()]; // [0,1,2,3,4,5,6,7,8,9]
console.log(array);

// values 方法
var array = ["abc", "xyz"];
var iterator = array.values();
console.log(iterator.next().value); // abc
console.log(iterator.next().value); // xyz
