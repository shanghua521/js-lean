// 原型式继承 浅拷贝
let parent4 = {
  name: "parent4",
  friends: ["p1", "p2", "p3"],
  getName: function () {
    return this.name;
  },
};

let person4 = Object.create(parent4);
person4.name = "tom";
person4.friends.push("jerry");

let person5 = Object.create(parent4);
person5.name = "lucy";
person5.friends.push("jerry");

console.log(person4.name);
console.log(person4.name === person4.getName());
console.log(person5.name);
console.log(person4.friends);
console.log(person5.friends);
