let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr);
console.log(newArr);

arr = [1, 2, 3];
newArr = arr.slice();
newArr[1] = 100;
console.log(arr);
console.log(newArr);
