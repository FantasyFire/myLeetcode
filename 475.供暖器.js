/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
/**
 * 写得比较复杂，在findNearestMid花了很多时间
 * 30/30 cases passed (152 ms)
 * Your runtime beats 21.67 % of javascript submissions
 * Your memory usage beats 5.07 % of javascript submissions (44.9 MB)
 */
var findRadius = function(houses, heaters) {
    if (heaters.length == 0) return 0
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    var left = 0, right = 0, ans = 0
    
    heaters = [-(10**9)].concat(heaters).concat([2*10**9])
    for (var i = 0; i < heaters.length - 1; i++) {
        left = right
        while (houses[right] <= heaters[i + 1] && right < houses.length) right++
        var radius = findNearestMid(houses, left, right, heaters[i], heaters[i + 1])
        if (radius > ans) ans = radius
    }
    return ans
};

var findNearestMid = function (houses, left, right, heater1, heater2) {
    if (left > right) return 0
    var mid = (heater1 + heater2) * 0.5
    var l = left, r = right
    var pre, cur = l
    while (l < r) {
        pre = cur
        if (houses[pre] == mid) return heater2 - mid
        if (houses[pre] < mid) {
            if (houses[pre + 1] == undefined || houses[pre + 1] > mid) break
            l = pre
        } else if (houses[pre] > mid) {
            if (houses[pre - 1] == undefined || houses[pre - 1] < mid) break
            r = pre
        }
        cur = Math.floor((l + r) * 0.5)
    }
    if (houses[pre] < mid) {
        var lradius = houses[pre] - heater1
        var rradius = houses[pre + 1] == undefined ? 0 : heater2 - houses[pre + 1]
        return Math.max(lradius, rradius)
    } else { // houses[pre] > mid
        var lradius = houses[pre - 1] == undefined ? 0 : houses[pre - 1] - heater1
        var rradius = heater2 - houses[pre]
        return Math.max(lradius, rradius)
    }
}
// @lc code=end

