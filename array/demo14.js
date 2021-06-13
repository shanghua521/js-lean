// 数字相加
function add() {
  var sum = 0;
  len = arguments.length;
  for (var i = 0; i < len; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add());
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3, 4));

// 连接字符串
function myConcat(separa) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separa);
}

console.log(myConcat(",", "red", "orange", "blue"));
console.log(myConcat(";", "elephant", "lion", "snake"));
console.log(myConcat(".", "one", "two", "three", "four", "five"));

// 使用 apply 将 foo 的参数传递给 bar
function foo() {
  bar.apply(this, arguments);
}

function bar(a, b, c) {
  console.log(a, b, c);
}

foo(1, 2, 3); // 1 2 3

// arguments 转换为数组
function sum(a, b) {
  let args = Array.prototype.slice.call(arguments);
  // let args = [].slice.call(arguments); // 这样写也一样的效果
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3

function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments);
  // let args = [].slice.call(arguments); // 这样写也一样的效果
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3

// ES6 的方法
function sum(a, b) {
  let args = Array.from(arguments);
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3

function sum(a, b) {
  let args = [...arguments];
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3

function sum(...args) {
  console.log(args.reduce((sum, cur) => sum + cur));
}
sum(1, 2); // 3
