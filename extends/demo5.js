// 寄生式继承
function clone(original) {
  let clone = Object.create(original);
  clone.getFriends = function () {
    return this.friends;
  };
  return clone;
}

// 原型式继承 浅拷贝
let parent5 = {
  name: "parent5",
  friends: ["p1", "p2", "p3"],
  getName: function () {
    return this.name;
  },
};

let person5 = clone(parent5);
console.log(person5.getName());
console.log(person5.getFriends());
