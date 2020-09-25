/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 自己想的办法，太暴力，过不了测试
 * Time Limit Exceeded
 * 315/318 cases passed (N/A)
 */
var threeSum = function(nums) {
    var cache = {}
    var result = []
    var len = nums.length
    for (var i = 0; i < len; i++) {
        var n = nums[i]
        if (!cache[0-n]) {
            cache[0-n] = true
            result = result.concat(twoSum(nums, i + 1, 0-n, result).map(a => a.concat(n)))
        }
    }
    return result
};

var twoSum = function (nums, si, target, finalResult) {
    var cache = {}, len = nums.length, result = []
    for (var i = si; i < len; i++) {
        var n = nums[i]
        if (!cache[target-n] && !cache[n]) {
            cache[target-n] = true
            cache[n] = true
            if (nums.indexOf(target-n, i+1)!=-1) {
                if (!finalResult.some(r => {
                    var idx1 = r.indexOf(n)
                    if (idx1 != -1) {
                        for (var j = 0; j < r.length; j++) {
                            if (j != idx1 && r[j]==target-n) return true
                        }
                        return false
                    } else {
                        return false
                    }
                })) {
                    result.push([n, target-n])
                }
            }
        }
    }
    return result
}
// @lc code=end

