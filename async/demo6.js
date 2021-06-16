function* gen() {
  console.log("enter");
  let a = yield 1;
  let b = yield (function () {
    return 2;
  })();
  return 3;
}

// yield 关键词最后返回一个迭代器，其中 value 是返回值，done 表示是否执行完毕
var g = gen(); // 程序会阻塞，不会执行任何语句
console.log(typeof g);
console.log(g.next()); // 调用 g.next() 后，程序继续执行，直到遇到 yield 关键词时执行暂停
console.log(g.next()); // 一直执行 next 方法，最后返回一个对象，其存在两个熟悉：value done
console.log(g.next());
console.log(g.next());
