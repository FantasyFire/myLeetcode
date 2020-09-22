/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max_len = 0, cur_s = '', s_len = s.length
    for (var i = 0; i < s_len; i++) {
        var w = s[i], wi = cur_s.indexOf(w)
        if (wi > -1) {
            max_len = Math.max(max_len, cur_s.length)
            cur_s = cur_s.substring(wi + 1) + w
        } else {
            cur_s += w
        }
    }
    return Math.max(max_len, cur_s.length)
};
// @lc code=end

