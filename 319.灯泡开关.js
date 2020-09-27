/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/**
 * 我TM裂开，下次做题要先看tag，脑筋急转弯的就算了
 * 这题关键在于怎么计算第n个灯泡到底亮不亮，我想到求约数个数是奇还是偶是没问题的。
 * 问题在于怎么快速的求得奇偶。因为对于n，如果存在约数k(k <= sqrt(n))，那么必然
 * 存在一个k'(k' >= sqrt(n))使得 k * k' == n，所以k和k'都是成对出现，只有一个情况
 * 除外，就是k = k' = sqrt(n) 那么此时n的约数个数为奇数个，否则就是偶数个。
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n))
};

/**
 * 显然bulbSwitch(n+1)和bulbSwitch(n)是有关系的
 * bulbSwitch(n+1) = bulbSwitch(n) + (n 在 [1, n] 中有奇数个约数 ? 1 : 0)
 * 这个办法不行，超时
 * 27/35 cases passed (N/A)
 * Testcase 99999
 * 尝试优化找约数个数部分，对于nn，大于nn/2不可能出现约数，然后从nn/2往1找
 * 还是超时 /哭笑
 */
// var ans = [0]
// var yueshu_arr = [0, 1]
// var bulbSwitch = function(n) {
//     var curN = n
//     var stack = []
//     while (ans[curN] == undefined) {
//         stack.push(curN)
//         curN = curN - 1
//     }
//     var len = stack.length
//     for (var i = len - 1; i >= 0 && len; i--) {
//         var nn = stack[i]
//         ans[nn] = ans[nn - 1] + (get_yueshu(nn) % 2 == 1? 1 : 0)
//     }
//     return ans[n]
// };

// var get_yueshu = function (n) {
//     if (yueshu_arr[n]) return yueshu_arr[n]
//     var count = 0
//     for (var i = Math.floor(n / 2); i >= 2; i--) {
//         if (n % i == 0) count++
//     }
//     yueshu_arr[n] = count + 2
//     return count + 2
// }
// @lc code=end

