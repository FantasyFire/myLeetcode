/*
 * @lc app=leetcode.cn id=815 lang=javascript
 *
 * [815] 公交路线
 */

// @lc code=start
/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */

/**
 * 翻译官方解答的python
 * 与我的答案区别在于以线路为一个点，然后计算线路与线路间是否相交
 * 45/45 cases passed (164 ms)
 * Your runtime beats 90 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (48.3 MB)
 */
var numBusesToDestination = function(routes, S, T) {
    if (S == T) return 0
    var map = {}, len = routes.length
    var used = new Set, roots = new Set, targets = new Set, ans = 1
    for (var i = 0; i < len; i++) {
        routes[i].sort((n1, n2) => n1 - n2)
        map[i] = new Set
        if (routes[i].includes(S)) {
            used.add(i)
            roots.add(i)
        }
        if (routes[i].includes(T)) targets.add(i)
    }
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (intersect(routes[i], routes[j])) {
                map[i].add(j)
                map[j].add(i)
            }
        }
    }

    while (roots.size > 0) {
        var nextRoots = new Set
        for (var root of roots) {
            if (targets.has(root)) return ans
            for (var n of map[root]) {
                if (!used.has(n)) {
                    used.add(n)
                    nextRoots.add(n)
                }
            }
        }
        ans++
        roots = nextRoots
    }

    return -1
};

var intersect = function (a1, a2) {
    var i = 0, j = 0
    while (i < a1.length && j < a2.length) {
        if (a1[i] == a2[j]) return true
        if (a1[i] < a2[j]) {
            i += 1
        } else {
            j += 1
        }
    }
    return false
}

/**
 * 超时过不了
 */
// var numBusesToDestination = function(routes, S, T) {
//     // var map = new Array(10**6).fill(0).map(i => new Array(10**6).fill(false))
//     var map = {}
//     for (var route of routes) {
//         var len = route.length
//         for (var i = 0; i < len; i++) {
//             for (var j = i + 1; j < len; j++) {
//                 if (!map[route[i]]) map[route[i]] = []
//                 if (!map[route[j]]) map[route[j]] = []
//                 if (!map[route[i]].includes(route[j])) map[route[i]].push(route[j])
//                 if (!map[route[j]].includes(route[i])) map[route[j]].push(route[i])
//                 // map[route[i]][route[j]] = map[route[j]][route[i]] = true
//             }
//         }
//     }
//     if (!map[S] || !map[T]) return -1
//     if (S == T) return 0
//     var ans = 0, used = new Set, roots = new Set
//     used.add(S)
//     roots.add(S)
//     while (roots.size > 0) {
//         var nextRoots = new Set
//         for (var root of roots) {
//             for (var i = 0; i < map[root].length; i++) {
//                 if (map[root][i] == T) return ans + 1
//                 if (!used.has(map[root][i])) {
//                     nextRoots.add(map[root][i])
//                     used.add(map[root][i])
//                 }
//             }
//         }
//         roots = nextRoots
//         ans++
//     }
//     return -1
// };
// @lc code=end

