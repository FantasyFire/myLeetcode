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
 * Your runtime beats 51.72 % of javascript submissions
 * Your memory usage beats 43.33 % of javascript submissions (37.2 MB)
 */
// var numMovesStones = function(a, b, c) {
//     if (a > b) [a, b] = [b, a]
//     if (a > c) [a, c] = [c, a]
//     if (b > c) [b, c] = [c, b]
//     var delta1 = b-a
//     var delta2 = c-b
//     var delta1_gte_2 = delta1 >=2
//     var delta2_gte_2 = delta2 >=2
//     return [(delta1_gte_2?1:0)+(delta2_gte_2?1:0)-((delta1==2||delta2==2)&&delta1_gte_2&&delta2_gte_2?1:0), c-a-2]
// };

/**
 * 学习了leetcode论坛里一种解法，看着很不错，不知道为什么效率反而低得离谱
 * 187/187 cases passed (100 ms)
 * Your runtime beats 5.17 % of javascript submissions
 * Your memory usage beats 43.33 % of javascript submissions (37.2 MB)
 */
var numMovesStones = function(a, b, c) {
        if (a > b) [a, b] = [b, a]
        if (a > c) [a, c] = [c, a]
        if (b > c) [b, c] = [c, b]
        var min
        if (c-a==2) {
            min = 0
        } else if (c-b<=2 || b-a<=2) {
            min = 1
        } else {
            min = 2
        }
        return [min, c-a-2]
    };
// @lc code=end

