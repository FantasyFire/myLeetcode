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
 * 将官方解答的python翻译过来，过不了
 * [2,3,5,6,7,8,9,10,11,17,18,19,23,26,27,29,31,32,33,34,35,36,38,39,40,41,42,43,44,45,47,51,54,55,57,58,64,65,67,68,72,73,74,75,77,78,81,86,87,88,89,91,93,94,95,96,98,99]
 * [5,24,85]
 * 改抄c++的版本试试，可以通过了，不过效率还是一般般
 * 66/66 cases passed (96 ms)
 * Your runtime beats 31.86 % of javascript submissions
 * Your memory usage beats 40.84 % of javascript submissions (37.6 MB)
 */
var N, durations = [1, 7, 30]
var _days, _costs, memo
var mincostTickets = function(days, costs) {
    N = days.length
    _days = days
    _costs = costs
    memo = new Array(N).fill(-1)
    
    return dp(0)
};

function dp(i) {
    if (i >= N) return 0
    if (memo[i] != -1) {
        return memo[i]
    }
    memo[i] = 10**9
    var j = i
    for (var idx = 0; idx < 3; idx++) {
        var c = _costs[idx], d = durations[idx]
        while (j < N && _days[j] < _days[i] + d) j += 1
        memo[i] = Math.min(memo[i], dp(j) + c)
    }
    return memo[i]
}


/**
 * 设dp[i][j]表示从第days[i]天到days[j]天的最少票价
 * 还要考虑costs并不一定是递增关系
 * 通过了，可是不明白为什么效率这么低
 * 66/66 cases passed (196 ms)
 * Your runtime beats 6.19 % of javascript submissions
 * Your memory usage beats 5.63 % of javascript submissions (42.1 MB)
 */
// var mincostTickets = function(days, costs) {
//     var len = days.length
//     var cost_min = Math.min(costs[0], costs[1], costs[2])
//     var dp = new Array(len).fill(0).map(i => new Array(len).fill(cost_min))

//     for (var i = len - 2; i >= 0; i--) {
//         for (var j = i + 1; j < len; j++) {
//             var min = days[j] - days[i]
//             min = Math.min(min < 7 ? costs[1] : 365001, min < 30 ? costs[2] : 365001)
//             for (var k = i; k < j; k++) {
//                 var sum = dp[i][k] + dp[k + 1][j]
//                 if (min > sum) min = sum
//             }
//             dp[i][j] = min
//         }
//     }
    
//     return dp[0][len - 1]
// };
// @lc code=end

