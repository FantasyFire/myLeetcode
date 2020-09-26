/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 写得有点复杂
 * 224/224 cases passed (184 ms)
 * Your runtime beats 23.72 % of javascript submissions
 * Your memory usage beats 52 % of javascript submissions (43.6 MB)
 */
var nextGreaterElements = function(nums) {
    var nextGreaterIdx = []
    var nextGreaterNum = []
    var len = nums.length
    for (var i = len - 1; i >= 0; i--) {
        var nextIdx = (i + 1) % len
        var nngi = nextGreaterIdx[nextIdx]
        if (nngi == undefined) {
            var ngi = nextGreaterIdx[i] = findNextGreaterIdx(nums, i)
            nextGreaterNum[i] = ngi == i ? -1 : nums[ngi]
        } else {
            if (nums[i] < nums[nextIdx]) {
                nextGreaterNum[i] = nums[nextIdx]
                nextGreaterIdx[i] = nextIdx
            } else if (nums[i] == nums[nextIdx]) {
                nextGreaterNum[i] = nextGreaterNum[nextIdx]
                nextGreaterIdx[i] = nngi
            } else {
                var ngi = nextGreaterIdx[i] = findNextGreaterIdx(nums, i, nngi)
                nextGreaterNum[i] = ngi == i ? -1 : nums[ngi]
            }
        }
    }
    return nextGreaterNum
};

var findNextGreaterIdx = function (nums, curIdx, si) {
    var n = nums[curIdx]
    var len = nums.length
    var nextIdx = si==undefined ? (curIdx + 1) % len : si
    while (nextIdx != curIdx && n >= nums[nextIdx]) nextIdx = (nextIdx + 1) % len
    return nextIdx
}
// @lc code=end

