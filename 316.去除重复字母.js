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
 * https://leetcode-cn.com/problems/remove-duplicate-letters/solution/qu-chu-zhong-fu-zi-mu-by-leetcode/
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var r = '', lasti = {}
    for (var j = 0; j < s.length; j++) lasti[s[j]] = j // 记录每个字母最后出现的位置，方便后面查找后方是否有重复的字母
    for (var i = 0; i < s.length; i++) { // O(n)
        var w = s[i], wi = r.indexOf(w)
        if (wi > -1) { // 由于else的操作，可以确保有重复字母的情况下，前面的字符串字典序一定比后面高，所以这里直接舍弃后面的字符

        } else { // 结果中尚无此字符，插入前，先将栈顶的字典序比当前字符小，且后方有重复的字符去除，以确保r中的字典序最高
            while (r && r[r.length-1] > w && lasti[r[r.length-1]] > i) r = r.substr(0, r.length-1)
            r += w
        }
        // console.log(i, r)
    }
    return r
};

