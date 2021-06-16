// 数组排序
// 各种排序的 JS 实现
// 数据结构算法中排序有很多种,根据他们的特性。可以大致分为两种类型

// 比较性排序
// 通过比较决定元素的相对次序，其时间复杂度不能突破 O(nlogn)，因此也称为非线性时间比较类排序

// 非比较类排序
// 不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界
// 以线性时间运行，因此也成为线性时间非比较类排序

// 冒泡排序
var a = [1, 3, 5, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function bubbleSort(array) {
  const len = array.length;
  if (len < 2) return array;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
bubbleSort(a);
console.log(a);

var a = [1, 3, 5, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function quickSort(array) {
  var quick = function (arr) {
    if (arr.length <= 1) return arr;
    const len = arr.length;
    const index = Math.floor(len >> 1);
    const pivot = arr.splice(index, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < len; i++) {
      if (arr[i] > pivot) {
        right.push(arr[i]);
      } else if (arr[i] <= pivot) {
        left.push(arr[i]);
      }
    }
    return quick(left).concat([pivot], quick(right));
  };
  const result = quick(array);
  return result;
}
a = quickSort(a);
console.log(a);

var a = [1, 3, 5, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function insertSort(array) {
  const len = array.length;
  let current;
  let prev;
  for (let i = 0; i < len; i++) {
    current = array[i];
    prev = i - 1;
    while (prev >= 0 && array[prev] > current) {
      array[prev + 1] = array[prev];
      prev--;
    }
    array[prev + 1] = current;
  }
  return array;
}
a = insertSort(a);
console.log(a);

var a = [1, 3, 5, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function selectSort(array) {
  const len = array.length;
  let temp;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}
selectSort(a);
console.log(a);

var a = [1, 3, 5, 3, 23, 76, 1, 34, 222, 6, 456, 221];

// 归并排序
function heap_sort(arr) {
  var len = arr.length;
  var k = 0;

  function swap(i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function max_heapify(start, end) {
    var dad = start;
    var son = dad * 2 + 1;
    if (son >= end) return;
    if (son + 1 < end && arr[son] < arr[son + 1]) {
      son++;
    }
    if (arr[dad] <= arr[son]) {
      swap(dad, son);
      max_heapify(son, end);
    }
  }

  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(i, len);
  }

  for (var j = len - 1; j > k; j--) {
    swap(0, j);
    max_heapify(0, j);
  }

  return arr;
}

heap_sort(a);
console.log(a);

var a = [1, 3, 5, 3, 23, 76, 1, 34, 222, 6, 456, 221];

// 归并排序
function mergeSort(array) {
  const merge = (right, left) => {
    const result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
  };
  const mergeSort = (array) => {
    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    return merge(mergeSort(left), mergeSort(right));
  };
  return mergeSort(array);
}

a = mergeSort(a);
console.log(a);
