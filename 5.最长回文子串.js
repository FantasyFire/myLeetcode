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
// 自己想的暴力解法
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

