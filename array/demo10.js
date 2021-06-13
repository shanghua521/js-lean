/* 
  var arr = [{ name:'birck1},{name:'brick2}',{name:'birck3'}] 
  希望返回 arr 里面每个对象的 name 拼接数据为 'brick1',brick2 & brick3
  如果 reduce 如何实现呢？
*/
var arr = [{ name: "one" }, { name: "two" }, { name: "title" }];
var res = arr.reduce(function (prev, current, index, array) {
  if (index === 0) {
    return current.name;
  } else if (index === array.length - 1) {
    return prev + "&" + current.name;
  } else {
    return prev + "," + current.name;
  }
}, "");
console.log(res);
