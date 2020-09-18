/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let addon=0, tail = {}, curNode = tail, hasNext;
    do {
        let nextVal = (l1||{val:0}).val + (l2||{val:0}).val + addon;
        addon = nextVal >= 10 ? 1 : 0;
        curNode.val = nextVal%10;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
        hasNext = l1 || l2 || addon;
        hasNext && (curNode = curNode.next = {next:null});
    } while (hasNext);
    return tail;
};

