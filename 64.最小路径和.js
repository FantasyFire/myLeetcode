/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var dp = new Array(grid.length).fill(0).map(i => new Array((grid[0]||[]).length).fill(0))
    var row_len = grid.length, col_len = grid[0].length
    if (grid[0][0]) dp[0][0] = grid[0][0]
    for (var i = 1; i < row_len; i++) dp[i][0] = dp[i - 1][0] + grid[i][0]
    for (var j = 1; j < col_len; j++) dp[0][j] = dp[0][j - 1] + grid[0][j]
    for (var i = 1; i < row_len; i++) {
        for (var j = 1; j < col_len; j++) { 
            dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
        }
    }
    // console.table(dp)
    return dp[grid.length - 1][grid[0].length - 1] || 0
};
// @lc code=end

