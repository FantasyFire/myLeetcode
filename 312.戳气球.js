/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 *
 * https://leetcode-cn.com/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (49.18%)
 * Total Accepted:    1K
 * Total Submissions: 2K
 * Testcase Example:  '[3,1,5,8]'
 *
 * 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
 * 
 * 现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的
 * left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。
 * 
 * 求所能获得硬币的最大数量。
 * 
 * 说明:
 * 
 * 
 * 你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * 
 * 
 * 示例:
 * 
 * 输入: [3,1,5,8]
 * 输出: 167 
 * 解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    var ret = 0, i, maxProduct, maxIdx;
    while(nums.length > 0) {
        var len = nums.length;
        maxProduct = maxIdx = 0;
        for (i = 0; i < len; i++) {
            var product = (i==0?1:nums[i-1])*nums[i]*(i==len-1?1:nums[i+1]);
            if ((i==0?1:nums[i-1])>nums[i] && nums[i]<(i==len-1?1:nums[i+1])) {
                maxProduct = product;
                maxIdx = i;
                break;
            }
            if (product > maxProduct) {
                maxProduct = product;
                maxIdx = i;
            } else if (product == maxProduct && nums[i] < nums[maxIdx]) {
                maxIdx = i;
            }
        }
        console.log(nums);
        console.log(nums[maxIdx]);
        ret += maxProduct;
        nums.splice(maxIdx, 1);
    }
    return ret;
};
