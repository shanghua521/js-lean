let a = {
  name: "jack",
  getName: function(msg) {
    return msg + this.name;
  },
};

let b = {
  name: "lily",
};

console.log(a.getName("hello~")); // hello~jack
console.log(a.getName.call(b, "hi~"));
console.log(a.getName.apply(b, ["hi~"]));
let name = a.getName.bind(b, "hello~");
console.log(name());
