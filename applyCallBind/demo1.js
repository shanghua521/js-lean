function Person() {
  this.name = "Jack";
}

var p = new Person();
console.log(p.name);

var p1 = Person();
console.log(p1); // undefined
console.log(name); // Jack
console.log(p1.name); // 'name' of undefined
