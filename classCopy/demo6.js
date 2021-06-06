// 乞丐版深拷贝
// 拷贝的对象的值如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify
// 序列化后的字符串中这个键值就会消失
// 拷贝 Date 引用对象类型会变成字符串
// 无法拷贝不可枚举的属性
// 无法拷贝对象的原型链
// 拷贝 RegExp 引用类型会变成空对象
// 对选中含有 NaN Infinity 以及-Infinity,JSON 序列化的结果会变成 null 
// 
let obj1 = { a: 1, b: [1, 2, 3] };
let str = JSON.stringify(obj1);
let obj2 = JSON.parse(str);
console.log(obj2);
obj1.a = 2;
obj1.b.push(4);
console.log(obj1)
console.log(obj2);
