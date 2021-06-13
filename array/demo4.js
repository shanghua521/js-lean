// Array.isArray 用啦判断是否为数组类型
// ES5
var a = [];
// 1.基于 instanceof
a instanceof Array;
// 2.基于 constructor
a.constructor === Array;
// 3.基于 Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a);
// 4.基于getPrototytypeof
Object.getPrototypeOf(a) === Array.prototype;
// 5.基于 Object.prototype.toString
Object.prototype.toString.apply(a) === "[object Array]";

// es6
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
