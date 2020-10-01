/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 设 dp[i]为s的前i位的解码方法总数
 * 那么 dp[i] = (s[i]=='0' ? 0 : dp[i-1]) + (0<(s[i-1]+s[i])<=26) ? dp[i-2] : 0
 * 只要存在dp[i] == 0，那么dp[s.length - 1] = 0
 */
var numDecodings = function(s) {
    var dp = [], len = s.length
    for (var i = 0; i < len; i++) {
        var num = 0
        var n = s[i] * 1
        if (!n == 0) {
            num += dp[i - 1] || 1
        }
        if (i > 0 && s[i - 1] != '0') {
            var prev = (s[i - 1] + n) * 1
            if (prev > 0 && prev <= 26) {
                num += dp [i - 2] || 1
            }
        }
        if (num == 0) {
            return 0
        } else {
            dp[i] = num
        }
    }
    return dp[len - 1]
};
// @lc code=end

