/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
/**
 * 设dp[i][j]表示从第days[i]天到days[j]天的最少票价
 * 还要考虑costs并不一定是递增关系
 * 通过了，可是不明白为什么效率这么低
 * 66/66 cases passed (196 ms)
 * Your runtime beats 6.19 % of javascript submissions
 * Your memory usage beats 5.63 % of javascript submissions (42.1 MB)
 */
var mincostTickets = function(days, costs) {
    var len = days.length
    var cost_min = Math.min(costs[0], costs[1], costs[2])
    var dp = new Array(len).fill(0).map(i => new Array(len).fill(cost_min))

    for (var i = len - 2; i >= 0; i--) {
        for (var j = i + 1; j < len; j++) {
            var min = days[j] - days[i]
            min = Math.min(min < 7 ? costs[1] : 365001, min < 30 ? costs[2] : 365001)
            for (var k = i; k < j; k++) {
                var sum = dp[i][k] + dp[k + 1][j]
                if (min > sum) min = sum
            }
            dp[i][j] = min
        }
    }
    
    return dp[0][len - 1]
};
// @lc code=end

