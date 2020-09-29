/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/**
 * 抄一遍官方解答
 * 确实是快一点，可是很难理解，跟着断点看才能理解
 */
var postorderTraversal = function(root) {
    if (!root) return []
    var ans = []
    var stack = []
    var prev = null

    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        if (!root.right || root.right == prev) {
            ans.push(root.val)
            prev = root
            root = null
        } else {
            stack.push(root)
            root = root.right
        }
    }

    return ans
};


// 用栈实现，反而更慢了？
// var postorderTraversal = function(root) {
//     var ans = []
//     var stack = []
//     if (root) stack.push(root)
//     while (stack.length) {
//         var node = stack[stack.length - 1]
//         if (!node.checked) {
//             if (node.left) {
//                 stack.push(node.left)
//                 node.checked = 1
//             } else if (node.right) {
//                 stack.push(node.right)
//                 node.checked = 2
//             } else {
//                 ans.push(node.val)
//                 stack.pop()
//             }
//         } else if (node.checked == 1) {
//             if (node.right) {
//                 stack.push(node.right)
//                 node.checked = 2
//             } else {
//                 ans.push(node.val)
//                 stack.pop()
//             }
//         } else if (node.checked == 2) {
//             ans.push(node.val)
//             stack.pop()
//         }
//     }
//     return ans
// };


// 简单的递归实现
// var postorderTraversal = function(root) {
//     return backtrack(root, [])
// };

// var backtrack = function (node, path) {
//     if (node) {
//         backtrack(node.left, path)
//         backtrack(node.right, path)
//         path.push(node.val)
//     }
//     return path
// }
// @lc code=end

