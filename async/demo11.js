async function func() {
  return 100;
}
// console.log(func());

(async () => {
  var i = await func();
  console.log(i);
})();
console.log(101);
