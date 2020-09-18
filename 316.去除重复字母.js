/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 *
 * https://leetcode-cn.com/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Hard (26.44%)
 * Total Accepted:    876
 * Total Submissions: 3.1K
 * Testcase Example:  '"bcabc"'
 *
 * 给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * 
 * 示例 1:
 * 
 * 输入: "bcabc"
 * 输出: "abc"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "cbacdcbc"
 * 输出: "acdb"
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var end = false
    while (s.length > 1) {
        var len = s.length;
        for (var i = 0; i < len - 1; i++) {
            var w1 = s[i].charCodeAt()
            var w2 = s[i + 1].charCodeAt()
            if (w1 == w2) {
                s = s.substr(0, i) + s.substring(i + 1)
                console.log(s)
                break
            }
            
            if (w1 > w2) {
                var dupIdx = s.indexOf(s[i], i + 1)
                if (dupIdx > -1) {
                    s = s.substr(0, i) + s.substring(i + 1)
                    console.log(s)
                    break
                }
            }

            if (i == len - 2) end = true
        }
        if (end) break
    }

    return s
};

