/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

/**
 * 翻译python的深优解法
 */
var vaild
var findOrder = function(numCourses, prerequisites) {
    var edges = {}
    var visited = new Array(numCourses).fill(0)
    var result = []
    valid = true

    for (var prq of prerequisites) {
        edges[prq[1]] = edges[prq[1]] || []
        edges[prq[1]].push(prq[0])
    }

    for (var i = 0; i < numCourses; i++) {
        if (valid && !visited[i])
            dfs(i, edges, visited, result)
    }

    if (!valid) return []
    return result.reverse()
}

var dfs = function (u, edges, visited, result) {
    visited[u] = 1
    for (var v of edges[u] || []) {
        if (visited[v] == 0) {
            dfs(v, edges, visited, result)
            if (!valid) return
        } else if (visited[v] == 1) {
            valid = false
            return
        }
    }
    visited[u] = 2
    result.push(u)
}

/**
 * 理解不了题目
 */
// var findOrder = function(numCourses, prerequisites) {
//     if (numCourses == 0) return []
//     var r = [0]
//     var preC = new Array(numCourses).fill(0).map(n => [])
//     var access = [true]
//     prerequisites.forEach(prq => preC[prq[0]].push(prq[1]))
//     while (r.length < numCourses) {
//         var newAccess = false
//         for (var i = 0; i < numCourses; i++) {
//             if (!access[i]) {
//                 if (!preC[i].some(pc => !access[pc])) {
//                     access[i] = true
//                     newAccess = true
//                     r.push(i)
//                 }
//             }
//         }
//         if (!newAccess) return []
//     }
//     return r
// };
// @lc code=end

