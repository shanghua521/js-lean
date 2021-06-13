// 不改变自身的方法

// concat 方法
var array = [1, 2, 3];
var array2 = array.concat(4, [5, 6], [7, 8, 9]);
console.log(array2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array); // [ 1, 2, 3 ],可见远数组未被修改

// join 方法
var array = ["We", "are", "Chinese"];
console.log(array.join()); // We,are,Chinese
console.log(array.join("+")); // We+are+Chinese

// 注意 splice 与 slice 方法
// slice 方法
var array = ["one", "two", "three", "four", "five"];
console.log(array.slice()); // [ 'one', 'two', 'three', 'four', 'five' ]
console.log(array.slice(2, 3)); // [ 'three' ]

// toLocalString 方法
var array = [{ name: "zz" }, 123, "abc", new Date()];
var str = array.toLocaleString();
console.log(str); // [object Object],123,abc,2021/6/12下午5:00:25

// indexOf 方法
var array = ["abc", "def", "ghi", "123"];
console.log(array.indexOf("def")); // 1

// includes 方法
var array = [-0, 1, 2];
console.log(array.includes(+0));
console.log(array.includes(1));
var array = [NaN];
console.log(arr);

// lastIndexOf 和 indexOf 基本功能差不多，lastIndexof 是从后面寻找元素的下标
// toSource 方法还未形成标准
