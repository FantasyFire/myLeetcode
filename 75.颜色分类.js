/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 再看了一个用快排中partition部分的思路来解题的思路，这个好理解一点
 * [0, zero)        0
 * [zero, i)        1
 * [two, len - 1]   2
 * 
 * 87/87 cases passed (100 ms)
 * Your runtime beats 32.96 % of javascript submissions
 * Your memory usage beats 5.5 % of javascript submissions (38.5 MB)
 */
var sortColors = function(nums) {
    var len = nums.length
    if (len < 2) return
    var zero = 0, two = len, i = 0
    while(i < two) {
        if (nums[i] == 0) {
            swap(nums, i, zero)
            i++
            zero++
        } else if (nums[i] == 1) {
            i++
        } else {
            two--
            swap(nums, i, two)
        }
    }
}

var swap = function(nums, idx1, idx2) {
    [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
}

/**
 * 翻译了官方python解答
 * 87/87 cases passed (100 ms)
 * Your runtime beats 14.31 % of javascript submissions
 * Your memory usage beats 5.05 % of javascript submissions (39.4 MB)
 */
// var sortColors = function(nums) {
//     var n = nums.length
//     var p0 = p1 = 0
//     for (var i = 0; i < n; i++) {
//         if (nums[i] == 1) {
//             [nums[i], nums[p1]] = [nums[p1], nums[i]];
//             p1 += 1
//         } else if (nums[i] == 0) {
//             [nums[i], nums[p0]] = [nums[p0], nums[i]];
//             if (p0 < p1) {
//                 [nums[i], nums[p1]] = [nums[p1], nums[i]];
//             }
//             p0 += 1
//             p1 += 1
//         }
//     }
// }

/**
 * 用双指针逼近方法来解，i=0,j=nums.length-1，当i==j时结束
 * 越想越复杂，还是看官方答案吧
 */
// var sortColors = function(nums) {
//     var i = 0, left_1 = [], j = nums.length - 1, right_1 = []
//     while (i < j) {
//         while (i < j && nums[i] <= 1) {
//             if (nums[i] == 1) {
//                 left_1.push(i)
//             } else if (left_1.length && nums[i] == 0) {
//                 var head = left_1.splice(0, 1)[0];
//                 [nums[head], nums[i]] = [nums[i], nums[head]];
//                 left_1.push(i)
//             }
//             i++
//         }
//         while (i < j && nums[j] >= 1) {
//             if (nums[j] == 1) {
//                 right_1.push(j)
//             } else if (right_1.length && nums[j] == 0) {
//                 var head = right_1.splice(0, 1)[0];
//                 [nums[head], nums[j]] = [nums[j], nums[head]];
//                 right_1.push(j)
//             }
//             j--
//         }
//         if (i < j) {
//             if (left_1.length == 0 && right_1.length == 0) {
//                 [nums[i], nums[j]] = [nums[j], nums[i]];
//             } else {
//                 var left = i, right = j
//                 if (left_1.length) {
//                     left = left_1.splice(0, 1)[0];
//                     left_1.push(i)
//                 }
//                 if (right_1.length) {
//                     right = right_1.splice(0, 1)[0];
//                     right_1.push(j)
//                 }
//                 if (left == i) {
//                     [nums[i], nums[right]] = [nums[right], nums[i]];
//                     [nums[left], nums[j]] = [nums[j], nums[left]];
//                 } else {
//                     [nums[left], nums[j]] = [nums[j], nums[left]];
//                     [nums[i], nums[right]] = [nums[right], nums[i]];
//                 }
//             }
//             i++
//             j--
//         } else if (nums[i] == 0 && left_1.length) {
//             var head = left_1.splice(0, 1)[0];
//             [nums[head], nums[i]] = [nums[i], nums[head]];
//         } else if (nums[i] == 2 && right_1.length) {
//             var head = right_1.splice(0, 1)[0];
//             [nums[head], nums[i]] = [nums[i], nums[head]];
//         }
//     }
//     if (nums[i] == 0 && left_1.length) {
//         var head = left_1.splice(0, 1)[0];
//         [nums[head], nums[i]] = [nums[i], nums[head]];
//     } else if (nums[i] == 2 && right_1.length) {
//         var head = right_1.splice(0, 1)[0];
//         [nums[head], nums[i]] = [nums[i], nums[head]];
//     }
//     console.log(nums.join(','))
// };
// @lc code=end

