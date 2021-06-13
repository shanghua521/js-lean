// ES6 直接调用 ES6 中的 flat 方法，可以直接实习数组扁平化
var arr = [1, [2, [3, 4, 5]]];

function flatten(arr) {
  return arr.flat(Infinity);
}

console.log(flatten(arr));

// 方法 6 正则和JSON方法共同处理
function flatten1(arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/(\[|\])/g, "");
  str = "[" + str + "]";
  return JSON.parse(str);
}
console.log(flatten1(arr));
