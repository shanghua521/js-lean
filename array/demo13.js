// NodeList 对象是节点的集合，通常是由 querySlector 返回的
// NodeList 可以使用 for...of 来迭代
// 在一些情况下，NodeList 是一个实时的集合
window.onload = function () {
  var list = document.querySelectorAll("input[type=checkbox]");

  for (var checkbox of list) {
    checkbox.checked = true;
  }

  console.log(list);
  console.log(typeof list);
  console.log(Object.prototype.toString.call(list));
};
