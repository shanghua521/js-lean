// pop 底层实现
Array.prototype.pop = function () {
  let O = Object(this);
  let len = this.length >>> 0;
  if (len === 0) {
    O.length = 0;
    return undefined;
  }
  len--;
  let value = O[len];
  O.length = len;
  return value;
};

const arr = [2, 30, 4, 21, 100000];
const result = arr.pop();
console.log(result);
