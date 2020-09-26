/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * 用三数之和的解法来解
 */
var fourSum = function(nums, target) {
    nums.sort((n1, n2) => n1 - n2)
    var len = nums.length
    var firstIdx = 0
    var result = []
    for (; firstIdx < len; firstIdx++) {
        if (firstIdx > 0 && nums[firstIdx] == nums[firstIdx - 1]) continue
        var secondIdx = firstIdx + 1
        for (; secondIdx < len; secondIdx++) {
            if (secondIdx > firstIdx + 1 && nums[secondIdx] == nums[secondIdx - 1]) continue
            var fourthIdx = len - 1
            var thirdIdx = secondIdx + 1
            for (; thirdIdx < len; thirdIdx++) {
                if (thirdIdx > secondIdx + 1 && nums[thirdIdx] == nums[thirdIdx - 1]) continue
                while (thirdIdx < fourthIdx && nums[firstIdx] + nums[secondIdx] + nums[thirdIdx] + nums[fourthIdx] > target) fourthIdx--
                if (thirdIdx == fourthIdx) break
                if (nums[firstIdx] + nums[secondIdx] + nums[thirdIdx] + nums[fourthIdx] == target) {
                    result.push([nums[firstIdx], nums[secondIdx], nums[thirdIdx], nums[fourthIdx]])
                }
            }
        }
    }
    return result
};
// @lc code=end

