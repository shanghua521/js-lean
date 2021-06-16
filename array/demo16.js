var arr = [
  {
    name: "apple",
    values: [1, 2, 3, 4],
  },
  {
    name: "orange",
    values: [1, 2, 3, 4],
  },
  {
    name: "pear",
    values: [1, 2, 3, 4],
  },
];

function deleteData(name, value) {
  arr.forEach(function (target) {
    if (target.name === name) {
      target.values = target.values.filter((e) => e !== value);
      return;
    }
  });
}

deleteData("apple", 1);
console.log(arr);

// stackoverflow 大佬的方法
const data = [
  {
    name: "apple",
    values: [1, 2, 3, 4],
  },
  {
    name: "orange",
    values: [1, 2, 3, 4],
  },
  {
    name: "pear",
    values: [1, 2, 3, 4],
  },
];

function deleteData2(name, value) {
  const target = data.find((e) => e.name === name);
  if (target) {
    target.values = target.values.filter((e) => e !== value);
  }
}

deleteData2("apple", 1);

console.log(data);
