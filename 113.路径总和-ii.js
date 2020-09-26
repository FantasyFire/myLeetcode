/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
/**
 * 用递归解答，注意尽量避免传递引用参数，速度会慢很多
 * 114/114 cases passed (108 ms)
 * Your runtime beats 47.8 % of javascript submissions
 * Your memory usage beats 55.14 % of javascript submissions (40.9 MB)
 */
var ans = []
var path = []
var pathSum = function(root, sum) {
    ans = []
    if (root) {
        path = []
        dfs(root, sum, 0)
    }
    return ans
};

var dfs = function (node, sum, preSum) {
    if (!node.left && !node.right) {
        if (preSum + node.val == sum) {
            ans.push(path.concat(node.val))
        }
    } else {
        path.push(node.val)
        if (node.left) dfs(node.left, sum, preSum + node.val)
        if (node.right) dfs(node.right, sum, preSum + node.val)
        path.pop()
    }
}
// var pathSum = function(root, sum) {
//     var ans = []
//     root.sum = root.val
//     var stack = [root]
//     while (stack.length) {
//         var peek = stack[stack.length - 1]
//         if (peek.left) {
//             var _sum = peek.left.sum = peek.left.val + peek.sum
//             if (_sum < sum) {
//                 peek.left.root = peek
//                 stack.push(peek.left)
//                 continue
//             } else if (_sum == sum) {
//                 var _ans = [], curNode = peek.left
//                 do {
//                     _ans.push(curNode.val)
//                     curNode = curNode.root || {}
//                 } while (curNode.root)
//                 ans.push(_ans.sort((n1, n2) => n1 - n2))
//             }
//         }
//         if (peek.right) {
//             var _sum = peek.right.sum = peek.right.val + peek.sum
//             if (_sum < sum) {
//                 peek.right.root = peek
//                 stack.push(peek.right)
//                 continue
//             } else if (_sum == sum) {
//                 var _ans = [], curNode = peek.right
//                 do {
//                     _ans.push(curNode.val)
//                     curNode = curNode.root || {}
//                 } while (curNode.root)
//                 ans.push(_ans.sort((n1, n2) => n1 - n2))
//             }
//         }
//         stack.pop()
//     }
// };
// @lc code=end

