/* 题目:数组 arr = [1,2,3,4] 求数组的和  */

// 第一种方法
var arr = [1, 2, 3, 4];
var sum = 0;
arr.forEach(function (e) {
  sum += e;
});
console.log(sum);

// 第二种方法
var arr = [1, 2, 3, 4];
var sum = 0;
arr.map(function (obj) {
  sum += obj;
});
console.log(sum);

// 第三种方法
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function (pre, cur) {
  return pre + cur;
});
console.log(sum);
