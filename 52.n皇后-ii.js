/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var backtrack = function(row) {
        if (row == n)
            return 1
        else {
            var count = 0
            for (var i = 0; i < n; i++) {
                if (columns.has(i) || diagonal1.has(row - i) || diagonal2.has(row + i))
                    continue
                columns.add(i)
                diagonal1.add(row - i)
                diagonal2.add(row + i)
                count += backtrack(row + 1)
                columns.delete(i)
                diagonal1.delete(row -i)
                diagonal2.delete(row + i)
            }
            return count
        }
    }
    var columns = new Set
    var diagonal1 = new Set
    var diagonal2 = new Set
    return backtrack(0)
};
// @lc code=end

