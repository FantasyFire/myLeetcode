/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var g_nums
var canPartitionKSubsets = function(nums, k) {
    g_nums = nums
    var ans = false
    var sum = 0, len = nums.length
    for (var n of nums) {
        sum += n
    }
    if (sum % k == 0) {
        var target = sum / k
        nums.sort((a, b) => a - b)
        var used = new Array(len).fill(false)
        ans = backtrack(used, target, k)
    }
    return ans
};

function backtrack(used, target, deep) {
    var prev
    var len = used.length
    var firstIdx = used.indexOf(false)
    if (firstIdx < 0) return true
    target -= g_nums[firstIdx]
    used[firstIdx] = true
    for (var i = firstIdx + 1; i < len; i++) {
        6
    }
}
// @lc code=end

