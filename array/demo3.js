// Array.from 的设计初衷是 快速便捷的基于其他对象创建数组
// 准确来说就是充一个类似数组的可迭代对象中，创建一个新的数组实例
// Array.from 有三个参数
// 1.类似数组的对象，必选
// 2.加工函数，新生成的数组会经过该函数的加工再返回
// 3.this 作用域，表示加工函数执行时 this 的值
var obj = { 0: "a", 1: "b", 2: "c", length: 3 };
console.log(
  Array.from(
    obj,
    function (value, index) {
      console.log(value, index, this, arguments.length);
      return value.repeat(3); // 必须指定返回值，否则返回 undefined
    },
    obj,
  ),
);

Array.from(obj, (value) => value.repeat(3));

// String
Array.from("abc"); // ["a","b","c"]
// Set
Array.from(new Set(["abc", "def"])); // ["abc","def"]
// Map
Array.from(
  new Map([
    [1, "ab"],
    [2, "de"],
  ]),
);
// [[1,'ab],[2,'de']]
