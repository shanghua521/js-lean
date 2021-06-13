// 给你两个有序整数数组 nums1 和 nums2,请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组
// 输入
var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

// 输出 [1,2,2,3,5,6]
nums1.splice(m);
nums2.splice(n);
nums1.push(...nums2);
nums1.sort((a, b) => a - b);
console.log(nums1);
