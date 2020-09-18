/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let l1=nums1.length, l2=nums2.length;
    let halfLen = l1 + l2, odd = halfLen%2==1, i = 0, i1 = 0, i2 = 0, last;
    halfLen = Math.ceil(halfLen/2);
    while(i < halfLen) {
        i++;
        last = (i1<l1?nums1[i1]:Number.MAX_VALUE) < (i2<l2?nums2[i2]:Number.MAX_VALUE);
        last ? i1++ : i2++;
    }
    last = last ? nums1[i1-1] : nums2[i2-1];
    return odd ? last : (last+Math.min(i1<l1?nums1[i1]:Number.MAX_VALUE, i2<l2?nums2[i2]:Number.MAX_VALUE))*0.5;
};

