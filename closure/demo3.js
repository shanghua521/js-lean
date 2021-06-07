// 当访问一个变量时，代码解释起会首先在当前的作用域查找
// 如果没找到，就去父级作用域去查找
// 直到找到该变量或者不存在父级作用域中
function fun1() {
  var a = 1;
  return function() {
    console.log(a);
  };
}

fun1();
var result = fun1();
result();
