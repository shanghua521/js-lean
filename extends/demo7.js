// 使用 es6 继承
class Person {
  constructor(name) {
    this.name = name;
  }

  // 原型方法
  // 即 Person.prototype.getName = function(){}
  // 下面可以简写为 getName(){}

  getName = function() {
    console.log("Person:", this.name);
  };
}

class Gamer extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const asuna = new Gamer("Asuna", 20);
asuna.getName();
