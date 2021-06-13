var a = Array(6); // [undefined X 6]
// 使用对象字面量
var b = [];
b.length = 6; // [undefined X 6]
// Array new Array(arg1,arg2) 参数对象为 0 或长度大于等于 2 时，传入参数依次成为新数组的第 0 至第 N 项

// Array new Array(len) 当 len 不是数组时，处理同上，
// 返回一个只包含 len 元素一项的数组；当 len 为数值时，len 不能超过 32 位无符号整型，即需要小于 2 的 32 次方
// (len 最大为 Math.pow(2,32)) 否则抛出 RangeError
