// setTimeout 为宏任务，由于 js 中单线程 eventLoop 机制
// 在主线程同步任务执行完后才去执行宏任务
// 因此 循环结束后 setTime 中的回调才依次执行
// 使用 var 会导致输出的值都是 6
// 因为 setTimeOut 函数也是一种闭包，往上找它的父级作用域链就是 window 变量 i 为 window 上的全局变量
// 开始执行 setTimeout 之前变量 i 已经是 6 了
// 因此最后输出的就都是 6
for (var i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

// 使用 IIFE 立即执行函数
for (var i = 0; i <= 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 0);
  })(i);
}

// 使用 let 块级作用域 也可以
for (let i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

// 使用 setTimeout 的第三个参数解决这个问题
for (var i = 0; i <= 5; i++) {
  setTimeout(
    function(j) {
      console.log(j);
    },
    0,
    i
  );
}
