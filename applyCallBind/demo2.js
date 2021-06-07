function Person() {
  this.name = "Jack";
  return { age: 18 };
}

var p = new Person();
console.log(p); // {age:18}
console.log(p.name); // undefined
console.log(p.age); // 18

console.log("---------------------");

function Person2() {
  this.name = "Jack";
  return "tom";
}

var p1 = new Person2();
console.log(p1); // {name: "Jack"}
console.log(p1.name); // Jack
