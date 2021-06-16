function* gen() {
  let a = yield 111;
  console.log(a);
  let b = yield 222;
  console.log(b);
  let c = yield 333;
  console.log(c);
  let d = yield 444;
  console.log(d);
}

let t = gen();
t.next(1); // 第一场执行 next 函数时, 传递的参数无效，故无打印结果
t.next(2); // a 输出 2
t.next(3); // c 输出 3
t.next(4); // d 输出 4
t.next(5); // d 输出 5
