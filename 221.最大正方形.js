/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
/**
 * 比较简单的动规
 * 73/73 cases passed (104 ms)
 * Your runtime beats 46.03 % of javascript submissions
 * Your memory usage beats 31.39 % of javascript submissions (40.2 MB)
 */
var maximalSquare = function(matrix) {
    var dp = new Array(matrix.length).fill(0).map(i => new Array((matrix[0]||[]).length).fill(0))
    var row_len = matrix.length, col_len = (matrix[0]||[]).length
    var max = 0
    for (var i = 0; i < row_len; i++) {
        if (max == 0 && matrix[i][0]=='1') max = 1
        dp[i][0] = matrix[i][0] * 1
    }
    for (var j = 1; j < col_len; j++) {
        if (max == 0 && matrix[0][j]=='1') max = 1
        dp[0][j] = matrix[0][j] * 1
    }
    for (var i = 1; i < row_len; i++) {
        for (var j = 1; j < col_len; j++) {
            dp[i][j] = matrix[i][j] == '0' ? 0 : Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
            if (dp[i][j] > max) max = dp[i][j]
        }
    }
    return max * max
};
// @lc code=end

