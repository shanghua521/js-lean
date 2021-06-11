// JSON.stringify 方法是将一个 JavaScript 对象或值转换为 JSON 字符串
// 第一个参数传入的是要转换的对象
// 第二个是一个 replacer 函数
// 第三个参数用来控制结果字符串里面的间距
JSON.stringify({ x: 1, y: 2 });
// "{"x":1,"y":2}"
JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// {"x":[10,null,null,null]}

// 第二个参数的例子
function replacer(key, value) {
  if (typeof value == "string") {
    return undefined;
  }
  return value;
}
var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 4,
  transport: "car",
  month: 7,
};
var jsonString = JSON.stringify(foo, replacer);
console.log(jsonString);
// {"week":4,"month":7}

// 第三个例子
JSON.stringify({ a: 2 }, null, "");
