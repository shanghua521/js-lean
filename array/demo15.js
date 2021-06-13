var arrayLike = {
  0: "java",
  1: "script",
  length: 2,
};

Array.prototype.push.call(arrayLike, "jack", "lily");
console.log(typeof arrayLike);
console.log(arrayLike);
