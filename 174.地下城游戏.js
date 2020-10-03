/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var minHP = new Array(dungeon.length).fill(0).map(i => new Array(dungeon[0].length).fill(1))
    var exHP = new Array(dungeon.length).fill(0).map(i => new Array(dungeon[0].length).fill(0))
    var row_len = dungeon.length, col_len = (dungeon[0]||[]).length
    if (dungeon[0][0]) {
        if (dungeon[0][0] >= 0) {
            exHP[0][0] = dungeon[0][0]
        } else {
            minHP[0][0] = -dungeon[0][0] + 1
        }
    }
    for (var i = 1; i < row_len; i++) {
        if (dungeon[i][0] >= 0) {
            exHP[i][0] = dungeon[i - 1][0]
            minHP[i][0] = minHP[i - 1][0]
        } else {
            minHP[i][0] = minHP[i - 1][0] - dungeon[i][0]
        }
    }
    for (var j = 1; j < col_len; j++) {
        if (dungeon[0][j] >= 0) {
            exHP[0][j] = dungeon[0][j - 1]
            minHP[0][j] = minHP[0][j - 1]
        } else {
            minHP[0][j] = minHP[0][j - 1] - dungeon[0][j]
        }
    }
    for (var i = 1; i < row_len; i++) {
        for (var j = 1; j < col_len; j++) {
            dp[i][j] = Math.min()
        }
    }
    return minHP[row_len - 1][col_len - 1] || 1
};
// @lc code=end

