/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 翻译官方python解法，厉害厉害
 * 关键点：排序，使得第2、3个值有并列关系，就可以使用双指针的方法，使2、3重循环由O(n^2)降为O(n)
 */
var threeSum = function(nums) {
    nums.sort((n1, n2) => n1 - n2)
    var len = nums.length
    var result = []

    for (var firstIdx = 0; firstIdx < len; firstIdx++) {
        if (firstIdx > 0 && nums[firstIdx] == nums[firstIdx - 1]) continue
        var thirdIdx = len - 1
        var target = -nums[firstIdx]
        for (var secondIdx = firstIdx + 1; secondIdx < len; secondIdx++) {
            if (secondIdx > firstIdx + 1 && nums[secondIdx] == nums[secondIdx - 1]) continue
            while (thirdIdx > secondIdx && nums[thirdIdx] + nums[secondIdx] > target) thirdIdx--
            if (secondIdx == thirdIdx) break
            if (nums[thirdIdx] + nums[secondIdx] == target) {
                result.push([nums[firstIdx], nums[secondIdx], nums[thirdIdx]])
            }
        }
    }
    return result
}

/**
 * 学习官方解法，先对nums排序，使用双指针的方法遍历
 * 速度上去了，有错误，可能缓存排重的部分不正确
 */
// var threeSum = function(nums) {
//     nums.sort()
//     var checked = {}
//     var pass = {}
//     var result = []
//     var len = nums.length
//     for (var i = 0; i < len; i++) {
//         var n = nums[i]
//         if (!checked[n]) {
//             checked[n] = true
//             pass[n] = pass[n] || {}
//             twoSum(nums, i + 1, n, pass, result)
//         }
//     }
//     return result
// };

// var twoSum = function (nums, si, first, pass, result) {
//     var checked = {}, len = nums.length
//     for (var i = si; i < len; i++) {
//         var second = nums[i]
//         if (!pass[first][second] && !checked[second] && !checked[-first-second]) {
//             checked[-first-second] = true
//             checked[second] = true
//             for (var j = len - 1; j > i; j--) {
//                 var third = nums[j]
//                 if (third < -first-second) break
//                 if (third == -first-second) {
//                     pass[first][second] = true
//                     pass[first][-first-second] = true
    
//                     pass[second] = pass[second] || {}
//                     pass[second][first] = true
//                     pass[second][-first-second] = true
    
//                     pass[-first-second] = pass[-first-second] || {}
//                     pass[-first-second][second] = true
//                     pass[-first-second][first] = true
    
//                     result.push([first, second, -first-second])
//                     break
//                 }
//             }
//         }
//     }
// }


/**
 * 想到一个好点的方案，再尝试一下
 * 还是超时了
 */
// var threeSum = function(nums) {
//     var checked = {}
//     var pass = {}
//     var result = []
//     var len = nums.length
//     for (var i = 0; i < len; i++) {
//         var n = nums[i]
//         if (!checked[n]) {
//             checked[n] = true
//             pass[n] = pass[n] || {}
//             twoSum(nums, i + 1, n, pass, result)
//         }
//     }
//     return result
// };

// var twoSum = function (nums, si, first, pass, result) {
//     var checked = {}, len = nums.length
//     for (var i = si; i < len; i++) {
//         var n = nums[i]
//         if (!pass[first][n] && !checked[n] && !checked[-first-n]) {
//             checked[-first-n] = true
//             checked[n] = true
//             if (nums.indexOf(-first-n, i+1)!=-1) {
//                 pass[first][n] = true
//                 pass[first][-first-n] = true

//                 pass[n] = pass[n] || {}
//                 pass[n][first] = true
//                 pass[n][-first-n] = true

//                 pass[-first-n] = pass[-first-n] || {}
//                 pass[-first-n][n] = true
//                 pass[-first-n][first] = true

//                 result.push([first, n, -first-n])
//             }
//         }
//     }
// }


/**
 * 自己想的办法，太暴力，过不了测试
 * Time Limit Exceeded
 * 315/318 cases passed (N/A)
 */
// var threeSum = function(nums) {
//     var cache = {}
//     var result = []
//     var len = nums.length
//     for (var i = 0; i < len; i++) {
//         var n = nums[i]
//         if (!cache[0-n]) {
//             cache[0-n] = true
//             result = result.concat(twoSum(nums, i + 1, 0-n, result).map(a => a.concat(n)))
//         }
//     }
//     return result
// };

// var twoSum = function (nums, si, target, finalResult) {
//     var cache = {}, len = nums.length, result = []
//     for (var i = si; i < len; i++) {
//         var n = nums[i]
//         if (!cache[target-n] && !cache[n]) {
//             cache[target-n] = true
//             cache[n] = true
//             if (nums.indexOf(target-n, i+1)!=-1) {
//                 if (!finalResult.some(r => {
//                     var idx1 = r.indexOf(n)
//                     if (idx1 != -1) {
//                         for (var j = 0; j < r.length; j++) {
//                             if (j != idx1 && r[j]==target-n) return true
//                         }
//                         return false
//                     } else {
//                         return false
//                     }
//                 })) {
//                     result.push([n, target-n])
//                 }
//             }
//         }
//     }
//     return result
// }


// @lc code=end

