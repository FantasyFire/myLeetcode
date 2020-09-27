/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/**
 * 看了官方解答用的动规方法，还不是很理解，先抄一遍吧
 */
var findMaxForm = function(strs, m, n) {
    var dp = new Array(m + 1).fill(0).map(i => new Array(n + 1).fill(0))
    for (var str of strs) {
        var count = {m: 0, n: 0}, len = str.length
        for (var i = 0; i < len; i++) count[str[i] == '0' ? 'm' : 'n']++
        for (var zeros = m; zeros >= count.m; zeros--) {
            for (var ones = n; ones >= count.n; ones--) {
                dp[zeros][ones] = Math.max(1 + dp[zeros - count.m][ones - count.n], dp[zeros][ones])
            }
        }
    }
    return dp[m][n]
}

/**
 * 尝试使用一个取巧的方法（还没有严谨的数学证明）
 * 价值公式不能保证算出最优解，这个方法不行
 */
// var findMaxForm = function(strs, m, n) {
//     var ans = 0
//     var m_n_count = []
//     var strs_len = strs.length
//     for (var i = 0; i < strs_len; i++) {
//         var str = strs[i]
//         var str_len = str.length
//         var count = {m: 0, n: 0}
//         for (var j = 0; j < str_len; j++) {
//             count[str[j] == '0' ? 'm' : 'n']++
//         }
//         m_n_count[i] = count
//     }

//     if (strs_len > 0) {
//         while ((m > 0 || n > 0) && m_n_count.length) {
//             var len = m_n_count.length, max = 0, max_idx = -1
//             for (var i = 0; i < len; i++) {
//                 var count = m_n_count[i]
//                 var val = 1 / ((count.m + 1) * (m + 1)) + 1 / ((count.n + 1) * (n + 1))
//                 if (val > max) {
//                     max = val
//                     max_idx = i
//                 }
//             }
//             m = m - m_n_count[max_idx].m
//             n = n - m_n_count[max_idx].n
//             if (m >= 0 && n >= 0) {
//                 console.log(m_n_count[max_idx])
//                 m_n_count.splice(max_idx, 1)
//                 ans++
//             } else {
//                 break
//             }
//         }
//     }

//     return ans
// };
// @lc code=end

