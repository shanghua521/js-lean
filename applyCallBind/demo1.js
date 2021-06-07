function Person() {
  this.name = "Jack";
}

// new 被调用后大致做了哪几件事
// 1. 让实例可以访问到私有属性
// 2. 让实例可以访问构造函数原型
// 3. 构造函数返回的最后结果是引用数据类型
var p = new Person();
console.log(p.name);

var p1 = Person();
console.log(p1); // undefined
console.log(name); // Jack
console.log(p1.name); // 'name' of undefined
