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

