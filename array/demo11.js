// 类数组

// 函数里面的 arguments
// 用 getElementsBytagname/ClassNme/Name 获得的 HTMLCollection
// 用 querySelectot 获得的 NodeList

// arguments
function foo(name, age, sex) {
  console.log(arguments);
  console.log(arguments.callee); // 打印 foo 方法
  console.log(typeof arguments);
  console.log(Object.prototype.toString.call(arguments));
}

foo("jack", "18", "male");
