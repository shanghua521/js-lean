const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// [ 1, 100000, 21, 30, 4 ]

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => a - b);
console.log(array2);
// 如果 compareFunction (a,b) 小于 0 那么 a 会被排列到 b 之前
// 如果 compareFunction (a,b) 等于 0 那么 a 和 b 的相对位置不变
// 如果 compareFunction (a,b) 大于 0 那么 b 会被排列到 a 之前
