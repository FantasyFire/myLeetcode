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
 * 尝试优化代码，使runtime更短
 * 执行时间并没有提高，官方也没例子，不知道差在哪里，但逻辑是和官方答案一致了，这里不细究了
 */
var maximalSquare = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return 0
    var dp = []
    var row_len = matrix.length, col_len = matrix[0].length
    var max = 0
    
    for (var i = 0; i < row_len; i++) {
        dp[i] = []
        for (var j = 0; j < col_len; j++) {
            if (matrix[i][j] == '1') {
                if (i == '0' || j == '0') {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = matrix[i][j] == '0' ? 0 : Math.min(dp[i][j - 1]||0, dp[i - 1][j]||0, dp[i - 1][j - 1]||0) + 1
                }
                if (dp[i][j] > max) max = dp[i][j]
            }
        }
    }
    return max * max
};


/**
 * 比较简单的动规
 * 73/73 cases passed (104 ms)
 * Your runtime beats 46.03 % of javascript submissions
 * Your memory usage beats 31.39 % of javascript submissions (40.2 MB)
 */
// var maximalSquare = function(matrix) {
//     var dp = new Array(matrix.length).fill(0).map(i => new Array((matrix[0]||[]).length).fill(0))
//     var row_len = matrix.length, col_len = (matrix[0]||[]).length
//     var max = 0
//     for (var i = 0; i < row_len; i++) {
//         if (max == 0 && matrix[i][0]=='1') max = 1
//         dp[i][0] = matrix[i][0] * 1
//     }
//     for (var j = 1; j < col_len; j++) {
//         if (max == 0 && matrix[0][j]=='1') max = 1
//         dp[0][j] = matrix[0][j] * 1
//     }
//     for (var i = 1; i < row_len; i++) {
//         for (var j = 1; j < col_len; j++) {
//             dp[i][j] = matrix[i][j] == '0' ? 0 : Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
//             if (dp[i][j] > max) max = dp[i][j]
//         }
//     }
//     return max * max
// };
// @lc code=end

