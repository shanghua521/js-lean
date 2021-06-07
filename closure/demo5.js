function fun1() {
  var a = 2;
  function fun2() {
    console.log(a);
  }
  return fun2;
}
var result = fun1();
result();
