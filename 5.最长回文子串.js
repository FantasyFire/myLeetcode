/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 用官方的manacher算法来解
/**
 * 103/103 cases passed (96 ms)
 * Your runtime beats 95.31 % of javascript submissions
 * Your memory usage beats 62.22 % of javascript submissions (39.7 MB)
 */
var expend = function (s, left, right) {
    while (left>0 && right<s.length-1 && s[left-1]==s[right+1]) {left--;right++}
    return (right-left)*0.5
}

var longestPalindrome = function(s) {
    var s = `#${s.split('').join('#')}#`
    var len = s.length, max_l = 0, max_r = -1
    var expenda = [] // 记录每个中心点的臂长
    var right = -1 // 最长右臂末端idx
    var j = 0 // 当前最长臂展中心点
    for (var i = 1; i < len-1; i++) {
        var cur_expend
        if (right > i) {
            var i_revers = 2 * j - i // 计算i关于j的对称点i'
            var min_expend = Math.min(expenda[i_revers], j + expenda[j] - i) // 取对称点i'与j的臂展的小值
            cur_expend = expend(s, i-min_expend, i+min_expend)
        } else {
            cur_expend = expend(s, i, i)
        }
        expenda[i] = cur_expend
        if (i+cur_expend > right) {
            right = i+cur_expend
            j = i
        }
        if (cur_expend * 2 > max_r - max_l) {
            max_l = i - cur_expend
            max_r = i + cur_expend
        }
    }
    return s.substring(max_l, max_r).replace(/#/g, '')
};


// 在中心扩展法的基础上，引入统一奇偶情况的技巧
/**
 * 103/103 cases passed (476 ms)
 * Your runtime beats 48.73 % of javascript submissions
 * Your memory usage beats 42.76 % of javascript submissions (44.9 MB)
 */
// var longestPalindrome = function(s) {
//     var s = `#${s.split('').join('#')}#`
//     var len = s.length, max = 0, r = ''
//     for (var i = 1; i < len-1; i++) {
//         console.log(i, s[i])
//         if (i-1>=0 && i+1<len && s[i-1] == s[i+1]) {
//             var pad = 1
//             while (s[i - pad] == s[i + pad] && i-pad>=0 && i+pad<len) pad++
//             var newlen = (pad-1)*2 + 1
//             if (newlen > max) {
//                 max = newlen
//                 r = s.substr(i - pad + 1, newlen)
//             }
//         }
//     }
//     r = s.length==0? '' : max ==0 ? s[0]: r
//     return r.replace(/#/g, '')
// };

/**
 * 103/103 cases passed (728 ms)
 * Your runtime beats 15.6 % of javascript submissions
 * Your memory usage beats 9.57 % of javascript submissions (65.2 MB)
 */
// var longestPalindrome = function(s) {
//     var palindrome = [], len = s.length, max = -1, ri = 0, rj = 0
//     // 初始化n*n二维数组，表示从第i到j的子串是否回文
//     for (var i = 0; i < len; i++) palindrome[i] = (new Array(len)).fill(false)
//     // 遍历数组
//     for (var l = 0; l < len; l++) { // 子串长度
//         for (var i = 0; i < len; i++) { // 子串起始点i
//             var j = i + l // 子串末点j
//             if (j >= len) break
//             if (l == 0) palindrome[i][j] = true // 显然单个字母是回文
//             if (l == 1) palindrome[i][j] = s[i] == s[j] // 长度为2的子串
//             if (l > 1) palindrome[i][j] = palindrome[i+1][j-1] && s[i] == s[j] // 其他情况
//             if (palindrome[i][j] && l > max) {
//                 max = l
//                 ri = i
//                 rj = j + 1
//             }
//             // console.log(i, j, max, ri, rj)
//         }
//     }
//     // console.log(palindrome)
//     return s.substring(ri, rj)
// };


// 自己想的暴力解法（对应官方答案的中心扩展算法）
/**
 * 103/103 cases passed (144 ms)
 * Your runtime beats 66.67 % of javascript submissions
 * Your memory usage beats 79.97 % of javascript submissions (38.3 MB)
 */
// var longestPalindrome = function(s) {
//     // var palindrome = {}
//     var len = s.length, max = 0, r = ''
//     for (var i = 0; i < len; i++) {
//         if (s[i] == s[i+1]) {
//             var pad = 1
//             while (s[i - pad] == s[i+1 + pad] && i-pad>=0 && i+1+pad<len) pad++
//             var newlen = (pad-1)*2 + 2
//             if (newlen > max) {
//                 max = newlen
//                 r = s.substr(i - pad + 1, newlen)
//             }
//         }
//         if (i-1>=0 && i+1<len && s[i-1] == s[i+1]) {
//             var pad = 1
//             while (s[i - pad] == s[i + pad] && i-pad>=0 && i+pad<len) pad++
//             var newlen = (pad-1)*2 + 1
//             if (newlen > max) {
//                 max = newlen
//                 r = s.substr(i - pad + 1, newlen)
//             }
//         }
//         // console.log(i, r, max)
//     }
//     r = s.length==0? '' : max ==0 ? s[0]: r
//     return r
// };
// @lc code=end

