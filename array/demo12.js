// HTMLCollection
// HTMLCollection 简单来说就是 HTML DOM 对象的一个接口，这个接口包含了获取到的 DOM 元素集合
// 返回的类型是类数组对象
// 如果用 typeof 来判断的话，它反悔的是 'object'
// 它是及时更新的，当文档 DOM 变化时，它也随之变化
window.onload = function () {
  var elem1, elem2;
  // document.froms[0] 是一个 HTMLCollection
  elem1 = document.forms[0];
  elem2 = document.forms.item(0);
  console.log(elem1);
  console.log(elem2);
  console.log(typeof elem1);
  console.log(Object.prototype.toString.call(elem1));
};
