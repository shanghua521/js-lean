let obj1 = { a: 1, b: [1, 2, 3] };


function deepClone(obj) {
  let cloneObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      cloneObj[key] = deepClone(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

// 这个深拷贝不能复制不可枚举类型以及 Symbol 类型
// 这种方法知识针对普通的类型的值做递归复制
// 对象的属性成环，即循环引用没有解决
let obj2 = deepClone(obj1);
obj1.a.b = 2;
console.log(obj1);
console.log(obj2);