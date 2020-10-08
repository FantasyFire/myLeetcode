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
 * 用双指针逼近方法来解，i=0,j=nums.length-1，当i==j时结束
 * 越想越复杂，还是看官方答案吧
 */
var sortColors = function(nums) {
    var i = 0, left_1 = [], j = nums.length - 1, right_1 = []
    while (i < j) {
        while (i < j && nums[i] <= 1) {
            if (nums[i] == 1) {
                left_1.push(i)
            } else if (left_1.length && nums[i] == 0) {
                var head = left_1.splice(0, 1)[0];
                [nums[head], nums[i]] = [nums[i], nums[head]];
                left_1.push(i)
            }
            i++
        }
        while (i < j && nums[j] >= 1) {
            if (nums[j] == 1) {
                right_1.push(j)
            } else if (right_1.length && nums[j] == 0) {
                var head = right_1.splice(0, 1)[0];
                [nums[head], nums[j]] = [nums[j], nums[head]];
                right_1.push(j)
            }
            j--
        }
        if (i < j) {
            if (left_1.length == 0 && right_1.length == 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                var left = i, right = j
                if (left_1.length) {
                    left = left_1.splice(0, 1)[0];
                    left_1.push(i)
                }
                if (right_1.length) {
                    right = right_1.splice(0, 1)[0];
                    right_1.push(j)
                }
                if (left == i) {
                    [nums[i], nums[right]] = [nums[right], nums[i]];
                    [nums[left], nums[j]] = [nums[j], nums[left]];
                } else {
                    [nums[left], nums[j]] = [nums[j], nums[left]];
                    [nums[i], nums[right]] = [nums[right], nums[i]];
                }
            }
            i++
            j--
        } else if (nums[i] == 0 && left_1.length) {
            var head = left_1.splice(0, 1)[0];
            [nums[head], nums[i]] = [nums[i], nums[head]];
        } else if (nums[i] == 2 && right_1.length) {
            var head = right_1.splice(0, 1)[0];
            [nums[head], nums[i]] = [nums[i], nums[head]];
        }
    }
    if (nums[i] == 0 && left_1.length) {
        var head = left_1.splice(0, 1)[0];
        [nums[head], nums[i]] = [nums[i], nums[head]];
    } else if (nums[i] == 2 && right_1.length) {
        var head = right_1.splice(0, 1)[0];
        [nums[head], nums[i]] = [nums[i], nums[head]];
    }
    console.log(nums.join(','))
};
// @lc code=end

