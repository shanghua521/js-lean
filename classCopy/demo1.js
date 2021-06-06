// 浅拷贝与深拷贝
let target = {};
let source = { a: { b: 2 } };
//target = source;
Object.assign(target, source);
console.log(target);

source.a.b = 10;
console.log(source);
console.log(target);
