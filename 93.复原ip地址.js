/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * 自己想的动规方法
 * 147/147 cases passed (92 ms)
 * Your runtime beats 53.68 % of javascript submissions
 * Your memory usage beats 22.37 % of javascript submissions (38.8 MB)
 */
var restoreIpAddresses = function(s) {
    var cache = [[],[],[],[]]
    var r = dp(s, 0, 3, cache)
    return r
};

var dp = function (s, si, deep, cache) {
    var r = []
    if (!cache[deep][si]) {
        if (deep) {
            if (s[si]) {
                r = r.concat(dp(s, si + 1, deep - 1, cache).map(c => `${s[si]}.${c}`))

                // 排除前导0
                if (s[si] != '0') {
                    if (s.length > si + 2) {
                        var n = s.substr(si, 3) * 1
                        if (n <= 255)
                            r = r.concat(dp(s, si + 3, deep - 1, cache).map(c => `${n}.${c}`))
                    }
                    if (s.length > si + 1) r = r.concat(dp(s, si + 2, deep - 1, cache).map(c => `${s[si]}${s[si+1]}.${c}`))
                }
            }
        } else {
            if (s[si]) {
                var remain = s.substring(si)
                if (si == s.length - 1) {
                    r.push(s[si])
                } else if (remain * 1 <= 255 && s[si] != '0') {
                    r.push(remain)
                }
            }
        }
        cache[deep][si] = r
    } else {
        r = cache[deep][si]
    }
    return r
}
// @lc code=end

