// ES6 新增的构造方法，Array.of Array.form
// ES6 专门扩展了数组构造器 Array
// 新增了 2 个方法：Array.of(用的少)、Array.from(更常用)
// Array.of 用于将参数依次转化为数组的一项，然后饭后这个新数组，而不管这个参数是数字还是其他s

Array.of(8.0); // [8]
Array(8.0); // [empty x 8]

Array.of(8.0, 5); // [8,5]
Array(8.0, 5); // [8,5]

Array.of("8"); // ["8"]
Array("8"); // ["8"]
