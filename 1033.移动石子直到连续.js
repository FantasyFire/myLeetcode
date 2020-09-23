/*
 * @lc app=leetcode.cn id=1033 lang=javascript
 *
 * [1033] 移动石子直到连续
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
/**
 * 第一次成功提交，自己想的办法，效率有点出乎意料的差
 * 187/187 cases passed (100 ms)
 * Your runtime beats 15.52 % of javascript submissions
 * Your memory usage beats 50 % of javascript submissions (37.2 MB)
 */
var numMovesStones = function(a, b, c) {
    if (a > b) [a, b] = [b, a]
    if (a > c) [a, c] = [c, a]
    if (b > c) [b, c] = [c, b]
    var delta1 = b-a
    var delta2 = c-b
    return [(delta1>1?1:0)+(delta2>1?1:0)-((delta1==2||delta2==2)&&delta1!=1&&delta2!=1?1:0), b-a-1+c-b-1]
};
// @lc code=end

