/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    var count = {}, len = s.length
    var minCount = 1
    var ans = 0
    for (var i = 0; i < len; i++) {
        var w = s[i]
        if (!count[w]) {
            count[w] = 1
        } else {
            count[w] += 1
            if () 
        }
    }
    return ans
};
// @lc code=end

