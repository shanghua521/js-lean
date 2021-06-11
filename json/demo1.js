const json = '{"result":true,"count":2}';
const obj = JSON.parse(json);

console.log(obj.count);
// 2
console.log(obj.result);
// true

// 带第二个参数的情况
JSON.parse('{"p":5}', function(k, v) {
  if (k === "") return v; // 如果 k 不是空
  return v * 2; // 就将属性值变为原来的二倍返回
}); // {p:10}
