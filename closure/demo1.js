// 作用域基本介绍
// 指变量能够被访问到的范围
// ES5 之前 全局作用域和函数作用域
// ES6 出现之后 新增块级作用域

var globalName = "global";

function getName() {
  console.log(globalName); // global
  var name = "inner";
  console.log(name); // inner
}

getName();
console.log(name); //
console.log(globalName); // global
function setName() {
  // 没有 var 默认全局变量
  vName = "setName";
}
setName();
console.log(vName); // setName
console.log(window.vName); // setName
