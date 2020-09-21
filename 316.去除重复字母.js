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
    if (s.length > 1) {
        var results = [s[0]]
        for (var i = 1; i < s.length; i++) {
            var curWord = s[i], pres = s.substr(0, i), idx = pres.indexOf(curWord)
            if (idx > -1) {
                // console.log(i, results)
                var len = results.length
                for (var j = 0; j < len; j++) {
                    var ss = results[j]
                    var ii = ss.indexOf(curWord)
                    results.push(ss.substr(0, ii) + ss.substring(ii + 1) + curWord)
                }
                // console.log(i, results)
            } else {
                results = results.map(r => r + curWord)
            }
        }
        results.sort()
        // console.log(results)
    }

    return s.length > 1 ? results[0] : s
};

