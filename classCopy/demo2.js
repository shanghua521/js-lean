let obj1 = { a: { b: 1 }, sym: Symbol };
Object.defineProperty(obj1, "innumerable", {
  value: "不可枚举类型",
  enumerable: false,
});
let obj2 = {};
Object.assign(obj2, obj1);
//obj2 = obj1;
obj1.a.b = 2;
console.log("obj1", obj1);
console.log("obj1", obj1);
