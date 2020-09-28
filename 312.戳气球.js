/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 学习了官方解答，以及labuladong的解析，动手写一下
 */
var maxCoins = function(nums) {
    var len = nums.length
    var tnums = [1].concat(nums).concat(1)
    var dp = new Array(len + 2).fill(0).map(i => new Array(len + 2).fill(0))
    for (var i = len; i >= 0; i--) {
        for (var j = i + 2; j < len + 2; j++) {
            var max = 0
            for (var k = i + 1; k < j; k++) {
                var val = dp[i][k] + dp[k][j] + tnums[i] * tnums[j] * tnums[k]
                if (val > max) max = val
            }
            dp[i][j] = max
        }
    }
    return dp[0][len + 1]
};
// @lc code=end

