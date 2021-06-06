// 原型链继承
function Parent1() {
  this.name = "parent1";
  this.play = [1, 2, 3];
}
function Child1() {
  this.type = "child2";
}

Child1.prototype = new Parent1();

console.log(new Child1());

var s1 = new Child1();
var s2 = new Child1();
s1.play.push(4);
console.log(s1.play, s2.play);
