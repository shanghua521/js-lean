// 数组扁平化其实就是将一个
//嵌套多层的数组 array （嵌套可以是任何层数）
// 转换为只有一层的数组

// 方法 1 普通的递归实现
var arr = [1, [2, [3, 4, 5]]];

function flatten1(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten1(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten1(arr)); // [1,2,3,4,5]

// 使用 reduce 函数迭代
// 从上面的递归函数可以看出，其实就是对数组的每一项进行处理
// 也可以使用 reduce 来实现数组的拼接，从而简化第一种方法
function flatten2(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten2(next) : next);
  }, []);
}
console.log(flatten2(arr)); // [1,2,3,4,5]

// 扩展运算符实现
function flatten3(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
    console.log(arr);
  }
  return arr;
}
console.log(flatten3(arr)); // [1,2,3,4,5]

// 使用 split 和 tostring 实现
function flatten4(arr) {
  return arr.toString().split(",");
}

console.log(flatten4(arr)); // [ '1', '2', '3', '4', '5' ]
