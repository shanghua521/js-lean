var a = 1;
function fun1() {
  var a = 2;

  function fun2() {
    var a = 3;
    console.log(a); // 3
  }
  fun2();
}
fun1();
