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
    if ([0,1].includes(s.length)) return s;
    if (s[1] < s[0] && s.indexOf(s[0], 2)!=-1 || s[1]==s[0]) return removeDuplicateLetters(s.substr(1));
    else return s[0] + removeDuplicateLetters(s.substr(1).replace(new RegExp(s[0], "g"), ''));
};

