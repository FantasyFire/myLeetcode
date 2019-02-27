/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (40.85%)
 * Total Accepted:    8.6K
 * Total Submissions: 21K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return trimAndTake(height);
};

var trimAndTake = function (height, si, ei) {
    var i, len = height.length, ret = 0;
    si = si || 0;
    ei = ei || len-1;
    if (ei - si <= 1) return 0;
    // trim left side
    for (i = si+1; i <= ei; i++) if (height[i-1] <= height[i]) si++; else break;
    // trim right side
    for (i = ei-1; i >= si; i--) if (height[i+1] <= height[i]) ei--; else break;
    if (ei - si <= 1) return 0;
    for (i = si; i <= ei; i++) {
        if (height[i] == 0) ret++;
        else height[i]--;
    }
    return ret + trimAndTake(height, si, ei);
};

