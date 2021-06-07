const str = "[object RegExp]";
let res;
let startTime = new Date();

for (let i = 1; i <= 3000000; i++) {
  res = str.replace(/\[object\s(.*?)\]/, "$1");
}
let endTime = new Date();
console.log("Reg 总耗时：", endTime - startTime);
console.log("Result", res);
console.log("----------------------------");
startTime = new Date();
for (let i = 1; i <= 3000000; i++) {
  res = str.slice(8, -1);
}
endTime = new Date();
console.log("slice 总耗时：", endTime - startTime);
console.log("Result", res);
