// Array#sort 实现
// 1. 当 n <= 10 时，采用插入排序
// 2. 当 n > 10 时，采用三路快速排序
// 3. 当 10 < n <=1000,采用中位数作为哨兵元素
// 4. 当 n > 1000，每隔 200~215 个元素挑出一个元素
// 放到一个新数组中，然后对它进行排序，找到中间位置的数以此作为中位数

// 为什么元素个数少的时候采用插入排序
// 插入排序理论上平均时间复杂度为 O(n^2)
// 快速排序是一个平均 O(nlongn) 级别的算法
// 这只是理论平均的时间复杂度估算
// 实际情况中两者的算法复杂度前面都会有一个系数，当 n 足够小的时候，快速排序 nlogn 的优势会越来越小
// 插入排序经过优化以后，对小数据集的排序会有非常优越的性能，甚至超过快排序

// 为什么花这么大力气选择哨兵元素

// 快速排序的性能瓶颈在于递归的深度，最坏的情况每次的哨兵都是从最小元素或者最大元素
// 那么进行 partition(一边说小于哨兵的元素，另一边是大于哨兵的元素)时，就会有一边是空的
// 这种情况 时间复杂度就会退化成 O(n^2)
// 让哨兵尽可能地处于数组的中间位置，让最大或者最小的情况尽可能少
const array = [1, 30, 4, 21, 100000];

function ArraySort(comparenfn) {
  // CHECK_OBJECT_COERCIBLE(this, "Array.prototype.sort");
  // var array = TO_OBJECT(this);
  // var length = TO_LENGTH(array.length);
  var length = array.length;

  return InnerArraySort(array, length, comparenfn);
}

function InnerArraySort(array, length, comparenfn) {
  // 比较函数未传入
  // if (!IS_CALLABLE(comparenfn)) {
  if (!comparenfn) {
    comparenfn = function (x, y) {
      if (x === y) return 0;
      // if (%_IsSmi(x) && %_IsSmi(y)) {
      //   return %SmiLexicographicCompare(x, y);
      // }
      x = TO_STRING(x);
      Y = TO_STRING(y);
      if (x == y) return 0;
      else return x < y ? -1 : 1;
    };
  }
  function InsertionSort(a, from, to) {
    // 插入排序
    for (var i = from + 1; i < to; i++) {
      var element = a[i];
      for (var j = i - 1; j >= from; j--) {
        var tmp = a[j];
        var order = comparenfn(tmp, element);
        if (order > 0) {
          a[j + 1] = tmp;
        } else {
          break;
        }
      }
      a[j + 1] = element;
    }
  }
  function GetThirdIndex(a, from, to) {
    // 元素个数大于 1000 时寻找哨兵元素
    var t_array = new InternalArray();
    var increment = 200 + ((to - from) & 15);
    var j = 0;
    from += 1;
    to -= 1;
    for (var i = from; i < to; i += increment) {
      t_array[j] = [i, a[i]];
      j++;
    }
    t_array.sort(function (a, b) {
      return comparenfn(a[1], b[1]);
    });
    var third_index = t_array[t_array.length >> 1][0];
    return third_index;
  }

  function QuickSort(a, from, to) {
    // 快速排序实现
    // 哨兵位置
    var third_index = 0;
    while (true) {
      if (to - from <= 10) {
        InsertionSort(a, from, to); // 数据量小，使用插入排序，速度较快
        return;
      }
      if (to - from > 1000) {
        third_index = GetThirdIndex(a, from, to);
      } else {
        // 小于 1000 直接取中点
        third_index = from + ((to - from) >> 1);
      }
      // 开始快排
      var v0 = a[from];
      var v1 = a[to - 1];
      var v2 = a[third_index];
      var co1 = comparenfn(v0, v1);
      if (co1 > 0) {
        var tmp = v0;
        v0 = v1;
        v1 = tmp;
      }
      var c02 = comparenfn(v0, v2);
      if (c02 >= 0) {
        var tmp = v0;
        v0 = v2;
        v2 = v1;
        v1 = tmp;
      } else {
        var c12 = comparenfn(v1, v2);
        if (c12 > 0) {
          var tmp = v1;
          v1 = v2;
          v2 = tmp;
        }
      }
      a[from] = v0;
      a[to - 1] = v2;
      var pivot = v1;
      var low_end = from + 1;
      var high_start = to - 1;
      a[third_index] = a[low_end];
      a[low_end] = pivot;
      partition: for (var i = low_end + 1; i < high_start; i++) {
        var element = a[i];
        var order = comparenfn(element, pivot);
        if (order < 0) {
          a[i] = a[low_end];
          a[low_end] = element;
          low_end++;
        } else if (order > 0) {
          do {
            high_start--;
            if (high_start == i) break partition;
            var top_elem = a[high_start];
            order = comparenfn(top_elem, pivot);
          } while (order > 0);
          a[i] = a[high_start];
          a[high_start] = element;
          if (order < 0) {
            element = a[i];
            a[i] = a[low_end];
            a[low_end] = element;
            low_end++;
          }
        }
      }
      // 快排核心思路
      if (to - high_start < low_end - from) {
        QuickSort(a, high_start, to);
        to = low_end;
      } else {
        QuickSort(a, from, low_end);
        from = high_start;
      }
    }
  }
}
ArraySort();
