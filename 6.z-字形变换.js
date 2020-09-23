/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * 自己想的解法，理论上是O(n)
 * 1158/1158 cases passed (124 ms)
 * Your runtime beats 47.09 % of javascript submissions
 * Your memory usage beats 43.39 % of javascript submissions (41.6 MB)
 */
var convert = function(s, numRows) {
    var rows = new Array(numRows).fill('')
    var loop_len = Math.max(numRows * 2 - 2, 1)
    var s_len = s.length
    for (var i = 0; i < s_len; i++) {
        var remain = i % loop_len
        var row_i = remain < numRows ? remain : loop_len - remain
        rows[row_i] += s[i]
    }
    return rows.reduce((pre, cur) => pre + cur, '')
};
// @lc code=end

