/*
 * @lc app=leetcode.cn id=948 lang=javascript
 *
 * [948] 令牌放置
 */

// @lc code=start
/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
/**
 * 显然，应该在有能量P的时候，将最小的token上翻
 * 能量不足时，将最大的token下翻，注意处理最后
 * 一个token时（i==j），不能下翻，因为没意义，只会扣分
 * 147/147 cases passed (104 ms)
 * Your runtime beats 14.29 % of javascript submissions
 * Your memory usage beats 22.22 % of javascript submissions (38.7 MB)
 */
var bagOfTokensScore = function(tokens, P) {
    var ans = 0
    tokens.sort((n1, n2) => n1 - n2)
    var i = 0, j = tokens.length - 1
    while (i <= j) {
        if (tokens[i] <= P) {
            P -= tokens[i]
            ans++
            i++
        } else if (ans > 0 && i != j) {
            P += tokens[j]
            ans--
            j--
        } else {
            break
        }
    }
    return ans
};
// @lc code=end

