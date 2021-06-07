// 闭包的表现形式
// 1. 返回一个函数
// 2. 住定时器，事件监听，Ajax 请求 web workers 或者任何异步
// 只要使用了回调函数，实际上就是使用了闭包

setTimeout(function handler() {
  console.log("1");
}, 1000);

// $("#app").click(function() {
//   console.log("Event Listener");
// });

// 3. 作为函数参数传递的形式，比如下面的例子
var a = 1;
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  bar(baz);
}

function bar(fn) {
  // 这就是闭包
  fn();
}

foo(); // 输出 2，而不是 1

// 4 IIFE (立即执行函数) 创建了闭包
// 保存了全局作用域（window）和当前函数的作用域，因此可以输出全局的变量
var a = 2;
(function IIFE() {
  console.log(a); // 输出 2
})();
